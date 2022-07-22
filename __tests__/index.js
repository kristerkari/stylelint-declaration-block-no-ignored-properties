const messages = require("..").messages;
const ruleName = require("..").ruleName;

const rule = require("..");

testRule(rule, {
  ruleName,
  config: [true],

  accept: [
    {
      code: "a { display: inline; }",
    },
    {
      code: "a { display: inline; color: red; }",
    },
    {
      code: "a { display: inline; padding: 10px; }",
    },
    {
      code: "a { display: inline; margin-left: 10px; }",
    },
    {
      code: "a { display: inline; margin-right: 10px; }",
    },
    {
      code: "a { display: inline; vertical-align: baseline; }",
    },
    {
      code: "a { display: inline-block; }",
    },
    {
      code: "a { display: inline-block; color: red; }",
    },
    {
      code: "a { display: inline-block; width: 10px; }",
    },
    {
      code: "a { display: inline-block; height: 10px; }",
    },
    {
      code: "a { display: inline-block; margin: 10px; }",
    },
    {
      code: "a { display: inline-block; padding: 10px; }",
    },
    {
      code: "a { display: inline-block; vertical-align: baseline; }",
    },
    {
      code: "a { display: inline-table; vertical-align: baseline; }",
    },
    {
      code: "a { display: inline-flex; vertical-align: baseline; }",
    },
    {
      code: "a { display: block; }",
    },
    {
      code: "a { display: block; color: red; }",
    },
    {
      code: "a { display: block; width: 10px; }",
    },
    {
      code: "a { display: block; height: 10px; }",
    },
    {
      code: "a { display: block; margin: 10px; }",
    },
    {
      code: "a { display: block; padding: 10px; }",
    },
    {
      code: "a { display: block; float: left; }",
    },
    {
      code: "a { display: table-cell; width: 100%; }",
    },
    {
      code: "a { display: table-cell; height: 100%; }",
    },
    {
      code: "a { display: table-cell; padding: 10px; }",
    },
    {
      code: "a { display: table; margin: 10px; }",
    },
    {
      code: "a { display: table; margin-top: 10px; }",
    },
    {
      code: "a { display: table; margin-right: 10px; }",
    },
    {
      code: "a { display: table; margin-bottom: 10px; }",
    },
    {
      code: "a { display: table; margin-left: 10px; }",
    },
    {
      code: "a { display: table-caption; margin: 10px; }",
    },
    {
      code: "a { display: table-caption; margin-top: 10px; }",
    },
    {
      code: "a { display: table-caption; margin-right: 10px; }",
    },
    {
      code: "a { display: table-caption; margin-bottom: 10px; }",
    },
    {
      code: "a { display: table-caption; margin-left: 10px; }",
    },
    {
      code: "a { display: inline-table; margin: 10px; }",
    },
    {
      code: "a { display: inline-table; margin-top: 10px; }",
    },
    {
      code: "a { display: inline-table; margin-right: 10px; }",
    },
    {
      code: "a { display: inline-table; margin-bottom: 10px; }",
    },
    {
      code: "a { display: inline-table; margin-left: 10px; }",
    },
    {
      code: "a { display: table-cell; padding: 10px; }",
    },
    {
      code: "a { display: table-cell; padding-top: 10px; }",
    },
    {
      code: "a { display: table-cell; padding-right: 10px; }",
    },
    {
      code: "a { display: table-cell; padding-bottom: 10px; }",
    },
    {
      code: "a { display: table-cell; padding-left: 10px; }",
    },
    {
      code: "a { display: table-cell; vertical-align: baseline; }",
    },
    {
      code: "a { position: static; display: block; }",
    },
    {
      code: "a { position: static; width: 100%; }",
    },
    {
      code: "a { position: static; vertical-align: baseline; }",
    },
    {
      code: "a { position: relative; vertical-align: baseline; }",
    },
    {
      code: "a { position: absolute; top: 0px; }",
    },
    {
      code: "a { position: absolute; right: 0px; }",
    },
    {
      code: "a { position: absolute; bottom: 0px; }",
    },
    {
      code: "a { position: absolute; left: 0px; }",
    },
    {
      code: "a { position: fixed; top: 0px; }",
    },
    {
      code: "a { position: fixed; right: 0px; }",
    },
    {
      code: "a { position: fixed; bottom: 0px; }",
    },
    {
      code: "a { position: fixed; left: 0px; }",
    },
    {
      code: "a { display: inline; &:hover { width: 100px; } }",
    },
    {
      code: "a { display: inline; &::before { width: 100px; } }",
    },
    {
      code: "a { display: inline; display: inline-block; width: 100px; }",
    },
    {
      code: "a { display: inline; width: 100px; display: inline-block; }",
    },
    {
      code: ".a { display: inline; width: 100px; display: inline-block; } .b { display: inline; width: 100px; display: inline-block; }",
    },
  ],

  reject: [
    {
      code: "a { display: inline; width: 100px; }",
      message: messages.rejected("width", "display: inline"),
      line: 1,
      column: 22,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: ".a { display: inline; width: 100px; } .b { display: inline; }",
      message: messages.rejected("width", "display: inline"),
      line: 1,
      column: 23,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: ".a { display: block; width: 100px; } .b { display: inline; width: 100px; }",
      message: messages.rejected("width", "display: inline"),
      line: 1,
      column: 60,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: "a { dIsPlAy: iNlInE; wIdTh: 100pX; }",
      message: messages.rejected("wIdTh", "dIsPlAy: iNlInE"),
      line: 1,
      column: 22,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: "a { DISPLAY: INLINE; WIDTH: 100PX; }",
      message: messages.rejected("WIDTH", "DISPLAY: INLINE"),
      line: 1,
      column: 22,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: "a { display: inline; min-width: 100px; }",
      message: messages.rejected("min-width", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out min-width",
    },
    {
      code: "a { display: inline; max-width: 100px; }",
      message: messages.rejected("max-width", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out max-width",
    },
    {
      code: "a { display: inline; height: 100px; }",
      message: messages.rejected("height", "display: inline"),
      line: 1,
      column: 22,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: "a { display: inline; min-height: 100px; }",
      message: messages.rejected("min-height", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out min-height",
    },
    {
      code: "a { display: inline; max-height: 100px; }",
      message: messages.rejected("max-height", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out max-height",
    },
    {
      code: "a { display: inline; margin: 100px; }",
      message: messages.rejected("margin", "display: inline"),
      line: 1,
      column: 22,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: "a { display: inline; margin-top: 100px; }",
      message: messages.rejected("margin-top", "display: inline"),
      line: 1,
      column: 22,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: "a { display: inline; margin-bottom: 100px; }",
      message: messages.rejected("margin-bottom", "display: inline"),
      line: 1,
      column: 22,
      description:
        "display: inline rules out width, height, margin-top and margin-bottom, and float",
    },
    {
      code: "a { display: inline; overflow: scroll; }",
      message: messages.rejected("overflow", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out overflow",
    },
    {
      code: "a { display: inline; overflow-x: scroll; }",
      message: messages.rejected("overflow-x", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out overflow-x",
    },
    {
      code: "a { display: inline; overflow-y: scroll; }",
      message: messages.rejected("overflow-y", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out overflow-x",
    },
    {
      code: "a { dislay: inline; inline-size: 100px; }",
      message: messages.rejected("inline-size", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out inline-size",
    },
    {
      code: "a { dislay: inline; min-inline-size: 100px; }",
      message: messages.rejected("min-inline-size", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out min-inline-size",
    },
    {
      code: "a { dislay: inline; max-inline-size: 100px; }",
      message: messages.rejected("max-inline-size", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out max-inline-size",
    },
    {
      code: "a { dislay: inline; block-size: 100px; }",
      message: messages.rejected("block-size", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out block-size",
    },
    {
      code: "a { dislay: inline; min-block-size: 100px; }",
      message: messages.rejected("min-block-size", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out min-block-size",
    },
    {
      code: "a { dislay: inline; max-block-size: 100px; }",
      message: messages.rejected("max-block-size", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out max-block-size",
    },
    {
      code: "a { dislay: inline; margin-block-start: 100px; }",
      message: messages.rejected("margin-block-start", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out margin-block-start",
    },
    {
      code: "a { dislay: inline; margin-block-end: 100px; }",
      message: messages.rejected("margin-block-end", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out margin-block-end",
    },
    {
      code: "a { dislay: inline; overflow-block: 100px; }",
      message: messages.rejected("overflow-block", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out overflow-block",
    },
    {
      code: "a { dislay: inline; overflow-inline: 100px; }",
      message: messages.rejected("overflow-inline", "display: inline"),
      line: 1,
      column: 22,
      description: "display: inline rules out overflow-inline",
    },
    {
      code: "a { display: block; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: block"),
      line: 1,
      column: 21,
      description: "display: block rules out baseline",
    },
    {
      code: "a { display: flex; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: flex"),
      line: 1,
      column: 20,
      description: "display: flex rules out baseline",
    },
    {
      code: "a { display: list-item; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: list-item"),
      line: 1,
      column: 25,
      description: "display: list-item rules out baseline",
    },
    {
      code: "a { display: table; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: table"),
      line: 1,
      column: 21,
      description: "display: table rules out baseline",
    },
    {
      code: "a { display: table-row-group; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: table-row-group"),
      line: 1,
      column: 31,
      description: "display: table-row-group rules out baseline",
    },
    {
      code: "a { display: table-row-group; inline-size: 10px; }",
      message: messages.rejected("inline-size", "display: table-row-group"),
      line: 1,
      column: 31,
      description: "display: table-row-group rules out inline-size",
    },
    {
      code: "a { display: table-row-group; min-inline-size: 10px; }",
      message: messages.rejected("min-inline-size", "display: table-row-group"),
      line: 1,
      column: 31,
      description: "display: table-row-group rules out min-inline-size",
    },
    {
      code: "a { display: table-row-group; max-inline-size: 10px; }",
      message: messages.rejected("max-inline-size", "display: table-row-group"),
      line: 1,
      column: 31,
      description: "display: table-row-group rules out max-inline-size",
    },
    {
      code: "a { display: table-column; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: table-column"),
      line: 1,
      column: 28,
      description: "display: table-column rules out baseline",
    },
    {
      code: "a { display: table-column; block-size: 10px; }",
      message: messages.rejected("block-size", "display: table-column"),
      line: 1,
      column: 28,
      description: "display: table-column rules out block-size",
    },
    {
      code: "a { display: table-column; min-block-size: 10px; }",
      message: messages.rejected("min-block-size", "display: table-column"),
      line: 1,
      column: 28,
      description: "display: table-column rules out min-block-size",
    },
    {
      code: "a { display: table-column; max-block-size: 10px; }",
      message: messages.rejected("max-block-size", "display: table-column"),
      line: 1,
      column: 28,
      description: "display: table-column rules out max-block-size",
    },
    {
      code: "a { display: table-column-group; vertical-align: baseline; }",
      message: messages.rejected(
        "vertical-align",
        "display: table-column-group"
      ),
      line: 1,
      column: 34,
      description: "display: table-column-group rules out baseline",
    },
    {
      code: "a { display: table-column-group; block-size: 10px; }",
      message: messages.rejected(
        "block-size",
        "display: table-column-group"
      ),
      line: 1,
      column: 34,
      description: "display: table-column-group rules out block-size",
    },
    {
      code: "a { display: table-column-group; min-block-size: 10px; }",
      message: messages.rejected(
        "min-block-size",
        "display: table-column-group"
      ),
      line: 1,
      column: 34,
      description: "display: table-column-group rules out min-block-size",
    },
    {
      code: "a { display: table-column-group; max-block-size: 10px; }",
      message: messages.rejected(
        "max-block-size",
        "display: table-column-group"
      ),
      line: 1,
      column: 34,
      description: "display: table-column-group rules out max-block-size",
    },
    {
      code: "a { display: table-header-group; vertical-align: baseline; }",
      message: messages.rejected(
        "vertical-align",
        "display: table-header-group"
      ),
      line: 1,
      column: 34,
      description: "display: table-header-group rules out baseline",
    },
    {
      code: "a { display: table-footer-group; vertical-align: baseline; }",
      message: messages.rejected(
        "vertical-align",
        "display: table-footer-group"
      ),
      line: 1,
      column: 34,
      description: "display: table-footer-group rules out baseline",
    },
    {
      code: "a { display: table-row; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: table-row"),
      line: 1,
      column: 25,
      description: "display: table-row rules out baseline",
    },
    {
      code: "a { display: table-row; inline-size: 100px; }",
      message: messages.rejected("inline-size", "display: table-row"),
      line: 1,
      column: 25,
      description: "display: table-row rules out inline-size",
    },
    {
      code: "a { display: table-row; min-inline-size: 100px; }",
      message: messages.rejected("min-inline-size", "display: table-row"),
      line: 1,
      column: 25,
      description: "display: table-row rules out min-inline-size",
    },
    {
      code: "a { display: table-row; max-inline-size: 100px; }",
      message: messages.rejected("max-inline-size", "display: table-row"),
      line: 1,
      column: 25,
      description: "display: table-row rules out max-inline-size",
    },
    {
      code: "a { display: table-caption; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "display: table-caption"),
      line: 1,
      column: 29,
      description: "display: table-caption rules out baseline",
    },
    {
      code: "a { position: absolute; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "position: absolute"),
      line: 1,
      column: 25,
      description: "position: absolute rules out baseline",
    },
    {
      code: "a { position: fixed; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "position: fixed"),
      line: 1,
      column: 22,
      description: "position: fixed rules out baseline",
    },
    {
      code: "a { float: left; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "float: left"),
      line: 1,
      column: 18,
      description: "float: left rules out baseline",
    },
    {
      code: "a { float: left; vertical-align: baseline; } a { float: left }",
      message: messages.rejected("vertical-align", "float: left"),
      line: 1,
      column: 18,
      description: "float: left rules out baseline",
    },
    {
      code: "a { float: right; vertical-align: baseline; }",
      message: messages.rejected("vertical-align", "float: right"),
      line: 1,
      column: 19,
      description: "float: right rules out baseline",
    },
    {
      code: "a { display: table-row; width: 10px; }",
      message: messages.rejected("width", "display: table-row"),
      line: 1,
      column: 25,
      description: "display: table-row rules out width",
    },
    {
      code: "a { display: table-row; min-width: 10px; }",
      message: messages.rejected("min-width", "display: table-row"),
      line: 1,
      column: 25,
      description: "display: table-row rules out min-width",
    },
    {
      code: "a { display: table-row; max-width: 10px; }",
      message: messages.rejected("max-width", "display: table-row"),
      line: 1,
      column: 25,
      description: "display: table-row rules out max-width",
    },
    {
      code: "a { display: table-row-group; width: 10px; }",
      message: messages.rejected("width", "display: table-row-group"),
      line: 1,
      column: 31,
      description: "display: table-row-group rules out width",
    },
    {
      code: "a { display: table-row-group; min-width: 10px; }",
      message: messages.rejected("min-width", "display: table-row-group"),
      line: 1,
      column: 31,
      description: "display: table-row-group rules out min-width",
    },
    {
      code: "a { display: table-row-group; max-width: 10px; }",
      message: messages.rejected("max-width", "display: table-row-group"),
      line: 1,
      column: 31,
      description: "display: table-row-group rules out max-width",
    },
    {
      code: "a { display: table-column; height: 10px; }",
      message: messages.rejected("height", "display: table-column"),
      line: 1,
      column: 28,
      description: "display: table-column rules out height",
    },
    {
      code: "a { display: table-column; min-height: 10px; }",
      message: messages.rejected("min-height", "display: table-column"),
      line: 1,
      column: 28,
      description: "display: table-column rules out min-width",
    },
    {
      code: "a { display: table-column; max-height: 10px; }",
      message: messages.rejected("max-height", "display: table-column"),
      line: 1,
      column: 28,
      description: "display: table-column rules out max-width",
    },
    {
      code: "a { display: table-column-group; height: 10px; }",
      message: messages.rejected("height", "display: table-column-group"),
      line: 1,
      column: 34,
      description: "display: table-column-group rules out height",
    },
    {
      code: "a { display: table-column-group; min-height: 10px; }",
      message: messages.rejected("min-height", "display: table-column-group"),
      line: 1,
      column: 34,
      description: "display: table-column-group rules out min-height",
    },
    {
      code: "a { display: table-column-group; max-height: 10px; }",
      message: messages.rejected("max-height", "display: table-column-group"),
      line: 1,
      column: 34,
      description: "display: table-column-group rules out max-height",
    },
    {
      code: "a { position: static; top: 1px; }",
      message: messages.rejected("top", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out top, right, bottom, and left",
    },
    {
      code: "a { position: static; right: 1px; }",
      message: messages.rejected("right", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out top, right, bottom, and left",
    },
    {
      code: "a { position: static; bottom: 1px; }",
      message: messages.rejected("bottom", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out top, right, bottom, and left",
    },
    {
      code: "a { position: static; left: 1px; }",
      message: messages.rejected("left", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out top, right, bottom, and left",
    },
    {
      code: "a { position: static; z-index: 1; }",
      message: messages.rejected("z-index", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out z-index",
    },
    {
      code: "a { position: static; inset-block-start: 10px; }",
      message: messages.rejected("inset-block-start", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out inset-block-start",
    },
    {
      code: "a { position: static; inset-inline-end: 10px; }",
      message: messages.rejected("inset-inline-end", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out inset-inline-end",
    },
    {
      code: "a { position: static; inset-block-end: 10px; }",
      message: messages.rejected("inset-block-end", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out inset-block-end",
    },
    {
      code: "a { position: static; inset-inline-start: 10px; }",
      message: messages.rejected("inset-inline-start", "position: static"),
      line: 1,
      column: 23,
      description: "position: static rules out inset-inline-start",
    },
    {
      code: "a { position: absolute; float: left; }",
      message: messages.rejected("float", "position: absolute"),
      line: 1,
      column: 25,
      description: "position: absolute rules out float",
    },
    {
      code: "a { position: absolute; clear: left; }",
      message: messages.rejected("clear", "position: absolute"),
      line: 1,
      column: 25,
      description: "position: absolute rules out clear",
    },
    {
      code: "a { position: fixed; float: left; }",
      message: messages.rejected("float", "position: fixed"),
      line: 1,
      column: 22,
      description: "position: absolute rules out float",
    },
    {
      code: "a { position: fixed; clear: left; }",
      message: messages.rejected("clear", "position: fixed"),
      line: 1,
      column: 22,
      description: "position: absolute rules out float",
    },
    {
      code: "a { list-style-type: none; list-style-image: url('starsolid.gif'); }",
      message: messages.rejected("list-style-image", "list-style-type: none"),
      line: 1,
      column: 28,
      description: "list-style-type: none rules out list-style-image",
    },
    {
      code: "a { overflow: visible; resize: both; }",
      message: messages.rejected("resize", "overflow: visible"),
      line: 1,
      column: 24,
      description: "overflow: visible rules out resize",
    },
  ],
});

// table-* rules out margin
const tableTypesForIgnoredMargin =
  "row|row-group|column|column-group|header-group|footer-group|cell";

tableTypesForIgnoredMargin.split("|").forEach((type) => {
  const column = 22 + type.length;
  testRule(rule, {
    ruleName,
    config: [true],

    reject: [
      {
        code: `a { display: table-${type}; margin: 10px; }`,
        message: messages.rejected("margin", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin`,
      },
      {
        code: `a { display: table-${type}; margin-top: 10px; }`,
        message: messages.rejected("margin-top", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-top`,
      },
      {
        code: `a { display: table-${type}; margin-right: 10px; }`,
        message: messages.rejected("margin-right", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-right`,
      },
      {
        code: `a { display: table-${type}; margin-bottom: 10px; }`,
        message: messages.rejected("margin-bottom", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-bottom`,
      },
      {
        code: `a { display: table-${type}; margin-left: 10px; }`,
        message: messages.rejected("margin-left", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-left`,
      },
      {
        code: `a { display: table-${type}; margin-block-start: 10px; }`,
        message: messages.rejected("margin-block-start", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-block-start`,
      },
      {
        code: `a { display: table-${type}; margin-inline-end: 10px; }`,
        message: messages.rejected("margin-inline-end", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-inline-end`,
      },
      {
        code: `a { display: table-${type}; margin-block-end: 10px; }`,
        message: messages.rejected("margin-block-end", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-block-end`,
      },
      {
        code: `a { display: table-${type}; margin-inline-start: 10px; }`,
        message: messages.rejected("margin-inline-start", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out margin-inline-start`,
      },
    ],
  });
});

// table-* rules out padding
const tableTypesForIgnoredPadding =
  "row|row-group|column|column-group|header-group|footer-group";

tableTypesForIgnoredPadding.split("|").forEach((type) => {
  const column = 22 + type.length;
  testRule(rule, {
    ruleName,
    config: [true],

    reject: [
      {
        code: `a { display: table-${type}; padding: 10px; }`,
        message: messages.rejected("padding", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding`,
      },
      {
        code: `a { display: table-${type}; padding-top: 10px; }`,
        message: messages.rejected("padding-top", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-top`,
      },
      {
        code: `a { display: table-${type}; padding-right: 10px; }`,
        message: messages.rejected("padding-right", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-right`,
      },
      {
        code: `a { display: table-${type}; padding-bottom: 10px; }`,
        message: messages.rejected("padding-bottom", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-bottom`,
      },
      {
        code: `a { display: table-${type}; padding-left: 10px; }`,
        message: messages.rejected("padding-left", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-left`,
      },
      {
        code: `a { display: table-${type}; padding-block-start: 10px; }`,
        message: messages.rejected("padding-block-start", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-block-start`,
      },
      {
        code: `a { display: table-${type}; padding-inline-end: 10px; }`,
        message: messages.rejected("padding-inline-end", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-inline-end`,
      },
      {
        code: `a { display: table-${type}; padding-block-end: 10px; }`,
        message: messages.rejected("padding-block-end", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-block-end`,
      },
      {
        code: `a { display: table-${type}; padding-inline-start: 10px; }`,
        message: messages.rejected("padding-inline-start", `display: table-${type}`),
        line: 1,
        column,
        description: `display: table-${type} rules out padding-inline-start`,
      },
    ],
  });
});
