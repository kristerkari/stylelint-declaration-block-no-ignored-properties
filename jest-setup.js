const _ = require("lodash");
const stylelint = require("stylelint");

global.testRule = (rule, schema) => {
  expect.extend({
    toHaveMessage(testCase) {
      if (testCase.message === undefined) {
        return {
          message: () =>
            'Expected "reject" test case to have a "message" property',
          pass: false
        };
      }

      return {
        pass: true
      };
    }
  });

  describe(schema.ruleName, () => {
    const stylelintConfig = {
      plugins: ["./index"],
      rules: {
        [schema.ruleName]: schema.config
      }
    };

    const passingTestCases = schema.accept || [];

    if (passingTestCases && passingTestCases.length) {
      describe("accept", () => {
        passingTestCases.forEach(testCase => {
          const spec = testCase.only ? it.only : it;
          describe(JSON.stringify(schema.config), () => {
            describe(JSON.stringify(testCase.code), () => {
              spec(testCase.description || "no description", () => {
                const options = {
                  code: testCase.code,
                  config: stylelintConfig,
                  syntax: schema.syntax
                };
                return stylelint.lint(options).then(output => {
                  expect(output.results[0].warnings).toEqual([]);
                  expect(output.results[0].parseErrors).toEqual([]);
                  if (!schema.fix) return;

                  // Check the fix
                  return stylelint
                    .lint(Object.assign({ fix: true }, options))
                    .then(output => {
                      const fixedCode = getOutputCss(output);
                      expect(fixedCode).toBe(testCase.code);
                    });
                });
              });
            });
          });
        });
      });
    }

    if (schema.reject && schema.reject.length) {
      describe("reject", () => {
        schema.reject.forEach(testCase => {
          const spec = testCase.only ? it.only : it;
          describe(JSON.stringify(schema.config), () => {
            describe(JSON.stringify(testCase.code), () => {
              spec(testCase.description || "no description", () => {
                const options = {
                  code: testCase.code,
                  config: stylelintConfig,
                  syntax: schema.syntax
                };
                return stylelint.lint(options).then(output => {
                  const warning = output.results[0].warnings[0];

                  expect(output.results[0].parseErrors).toEqual([]);
                  expect(testCase).toHaveMessage();

                  if (testCase.message !== undefined) {
                    expect(_.get(warning, "text")).toBe(testCase.message);
                  }
                  if (testCase.line !== undefined) {
                    expect(_.get(warning, "line")).toBe(testCase.line);
                  }
                  if (testCase.column !== undefined) {
                    expect(_.get(warning, "column")).toBe(testCase.column);
                  }

                  if (!schema.fix) return;

                  if (!testCase.fixed) {
                    throw new Error(
                      "If using { fix: true } in test schema, all reject cases must have { fixed: .. }"
                    );
                  }

                  // Check the fix
                  return stylelint
                    .lint(Object.assign({ fix: true }, options))
                    .then(output => {
                      const fixedCode = getOutputCss(output);
                      expect(fixedCode).toBe(testCase.fixed);
                      expect(fixedCode).not.toBe(testCase.code);
                    });
                });
              });
            });
          });
        });
      });
    }
  });
};

function getOutputCss(output) {
  const result = output.results[0]._postcssResult;
  const css = result.root.toString(result.opts.syntax);
  return css;
}
