module.exports = {
  transform: {
    '\\.(js)?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.js"
  }
}
