import type { Plugin } from "stylelint";

export declare const ruleName: "plugin/declaration-block-no-ignored-properties";
export declare const messages: {
  rejected: (ignore: string, cause: string) => string;
};
declare const plugin: Plugin;
export default plugin;
