module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "./styleMock.js"
  }
};