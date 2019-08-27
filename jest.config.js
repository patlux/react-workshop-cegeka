module.exports = {
  transform: {
    '\\.(js)?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
}
