export const packagejson = (name: string) => `{
  "name": "${name.toLowerCase()}",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "test": "jest",
    "build": "tsc"
  },
  "dependencies": {
    "@tenarix/core": "^1.2.0"
  },
  "devDependencies": {
    "@types/jest": "^27.4.0",
    "dotenv": "^16.0.1",
    "jest": "^27.4.7",
    "ts-jest": "^27.1.2",
    "typescript": "^4.7.3"
  }
}
`;
