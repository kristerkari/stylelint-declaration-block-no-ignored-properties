const vendorPrefixes = require("../../utils/vendorPrefixes");

describe("utils/vendorPrefixes", () => {
  it("should return the vendor prefix when it is specified", () => {
    expect(vendorPrefixes.prefix("-moz-tab-size")).toBe("-moz-");
    expect(vendorPrefixes.prefix("-webkit-tab-size")).toBe("-webkit-");
    expect(vendorPrefixes.prefix("-whatever-tab-size")).toBe("-whatever-");
  });

  it("should return an empty string is the prefix is not present", () => {
    expect(vendorPrefixes.prefix("tab-size")).toBe("");
  });

  it("should return the unprefixed version of CSS rule", () => {
    expect(vendorPrefixes.unprefixed("-moz-tab-size")).toBe("tab-size");
    expect(vendorPrefixes.unprefixed("tab-size")).toBe("tab-size");
  });
});
