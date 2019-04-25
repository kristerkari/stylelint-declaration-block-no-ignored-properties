const matchesStringOrRegExp = require("./utils/matchesStringOrRegExp");
const postcss = require("postcss");
const stylelint = require("stylelint");
const report = stylelint.utils.report;
const ruleMessages = stylelint.utils.ruleMessages;
const validateOptions = stylelint.utils.validateOptions;

const ruleName = "plugin/declaration-block-no-ignored-properties";

const messages = ruleMessages(ruleName, {
  rejected: (ignore, cause) => `Unexpected "${ignore}" with "${cause}"`
});

const ignored = [
  {
    property: "display",
    value: "inline",
    ignoredProperties: [
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "margin-top",
      "margin-bottom",
      "overflow",
      "overflow-x",
      "overflow-y"
    ]
  },
  {
    property: "display",
    value: "list-item",
    ignoredProperties: ["vertical-align"]
  },
  {
    property: "display",
    value: "block",
    ignoredProperties: ["vertical-align"]
  },
  {
    property: "display",
    value: "flex",
    ignoredProperties: ["vertical-align"]
  },
  {
    property: "display",
    value: "table",
    ignoredProperties: ["vertical-align"]
  },
  {
    property: "display",
    value:
      "/^table-(row|row-group|column|column-group|header-group|footer-group|cell)$/",
    ignoredProperties: [
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left"
    ]
  },
  {
    property: "display",
    value:
      "/^table-(row|row-group|column|column-group|header-group|footer-group)$/",
    ignoredProperties: [
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left"
    ]
  },
  {
    property: "display",
    value:
      "/^table-(row|row-group|column|column-group|header-group|footer-group|caption)$/",
    ignoredProperties: ["vertical-align"]
  },
  {
    property: "display",
    value: "/^table-(row|row-group)$/",
    ignoredProperties: ["width", "min-width", "max-width"]
  },
  {
    property: "display",
    value: "/^table-(column|column-group)$/",
    ignoredProperties: ["height", "min-height", "max-height"]
  },
  {
    property: "float",
    value: "left",
    ignoredProperties: ["vertical-align"]
  },
  {
    property: "float",
    value: "right",
    ignoredProperties: ["vertical-align"]
  },
  {
    property: "position",
    value: "static",
    ignoredProperties: ["top", "right", "bottom", "left", "z-index"]
  },
  {
    property: "position",
    value: "absolute",
    ignoredProperties: ["float", "clear", "vertical-align"]
  },
  {
    property: "position",
    value: "fixed",
    ignoredProperties: ["float", "clear", "vertical-align"]
  },
  {
    property: "list-style-type",
    value: "none",
    ignoredProperties: ["list-style-image"]
  },
  {
    property: "overflow",
    value: "visible",
    ignoredProperties: ["resize"]
  }
];

function isFlexDirectionRow(node) {
  return node.prop === "flex-direction" && node.value === "row";
}

function isFlexDirectionColumn(node) {
  return node.prop === "flex-direction" && node.value === "column";
}

const rule = actual => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, { actual });

    if (!validOptions) {
      return;
    }

    root.walkRules(rule => {
      const uniqueDecls = {};
      rule.walkDecls(decl => {
        uniqueDecls[decl.prop] = decl;
      });

      function check(prop, index) {
        const decl = uniqueDecls[prop];
        const value = decl.value;
        const unprefixedProp = postcss.vendor.unprefixed(prop);
        const unprefixedValue = postcss.vendor.unprefixed(value);
        const isFlexBasis =
          unprefixedProp.toLowerCase() === "flex-basis" &&
          unprefixedValue.toLocaleLowerCase() !== "auto";

        if (isFlexBasis) {
          const { nodes } = decl.parent;
          const flexDirections = nodes.filter(
            node => isFlexDirectionRow(node) || isFlexDirectionColumn(node)
          );
          if (flexDirections.length === 1) {
            const ignoredProp = isFlexDirectionRow(flexDirections[0])
              ? "width"
              : "height";
            const node = nodes.filter(node => node.prop === ignoredProp);
            if (node.length === 1) {
              report({
                message: messages.rejected(node[0].prop, decl.toString()),
                node: node[0],
                result,
                ruleName
              });
              return;
            }
          }
        }

        ignored.forEach(ignore => {
          const matchProperty = matchesStringOrRegExp(
            unprefixedProp.toLowerCase(),
            ignore.property
          );
          const matchValue = matchesStringOrRegExp(
            unprefixedValue.toLowerCase(),
            ignore.value
          );

          if (!matchProperty || !matchValue) {
            return;
          }

          const ignoredProperties = ignore.ignoredProperties;

          decl.parent.nodes.forEach((node, nodeIndex) => {
            if (
              !node.prop ||
              ignoredProperties.indexOf(node.prop.toLowerCase()) === -1 ||
              index === nodeIndex
            ) {
              return;
            }

            report({
              message: messages.rejected(node.prop, decl.toString()),
              node,
              result,
              ruleName
            });
          });
        });
      }

      Object.keys(uniqueDecls).forEach(check);
    });
  };
};

module.exports = stylelint.createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
