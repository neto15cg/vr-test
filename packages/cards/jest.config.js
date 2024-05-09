module.exports = {
  transform: {
    '^.+\\.(ts?|jsx?|tsx?|js)?$': 'ts-jest',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/tests/config/setup.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/.yalc/'],
  transformIgnorePatterns: ['/node_modules/(?!(react-context-slices)/)'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testEnvironment: 'jsdom',
};
