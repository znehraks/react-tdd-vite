/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"], // jest.setup을 이용하여 환경 설정
  transform: {
    // ts-jest를 이용하여 typescript 사용 환경 설정
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.jest.json", // tsconfig.jest.json 사용 설정
      },
    ],
    "^.+\\.css$": "<rootDir>/src/jest/cssTransform.cjs",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/src/jest/fileTransform.cjs",
    // babel-jest를 이용하여 javascrit 사용 환경 설정 (cjs파일에서 import 활용 등)
    "^.+\\.(js|cjs|jsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss|tff|png)$": "identity-obj-proxy",
    "^.+\\.svg$": "<rootDir>/src/__mocks__/svgrMock.cjs",
  },
};
