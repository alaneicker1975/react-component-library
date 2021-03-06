module.exports = {
  verbose: true,
  rootDir: '../',
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>/node_modules'],
  collectCoverage: true,
  setupFiles: ['<rootDir>/jest/global-mocks.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
    '!**/index.js',
    '!src/components/tests/**/*.js',
    '!src/components/toaster/toast-context.js',
    // Excluding experimental components
    '!src/components/credit-card-field/**/*.js',
    '!src/components/**/*.spec.js',
  ],
  testMatch: ['<rootDir>/src/**/?(*.)(test).{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': 'babel-jest',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/jest/css-mock.js',
    '\\.svg': '<rootDir>/jest/svg-mock.js',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
};
