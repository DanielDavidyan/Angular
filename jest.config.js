module.exports = {
  preset: 'jest-preset-angular',
  roots:['src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  testURL: 'http://localhost',
  transformIgnorePatterns: ['node_modules/(?!ng2-semantic-ui)'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'src/tsconfig.spec.json'
    },
    '__TRANSFORM_HTML__': true
  },
}
