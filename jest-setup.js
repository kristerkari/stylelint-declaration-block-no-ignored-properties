import getTestRule from "jest-preset-stylelint/getTestRule";

global.testRule = getTestRule({ plugins: ["./index.js"] });
