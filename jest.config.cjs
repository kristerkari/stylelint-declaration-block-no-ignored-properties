module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["index.js"],
  coverageDirectory: "./coverage/",
  coverageReporters: ["lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  testEnvironment: "node",
  setupFiles: ["./jest-setup.js"],
};
