export const tindex = `import extension from "../src";
import { parser, content } from "@tenarix/core";

const base = extension(content, parser);

describe("Extension", () => {
  test("should be a valid extension", () => {
    expect(base.home).toBeInstanceOf(Function);
    expect(base.read).toBeInstanceOf(Function);
    expect(base.details).toBeInstanceOf(Function);
    expect(base.library).toBeInstanceOf(Function);
    expect(base.name).toBeDefined();
    expect(base.lang).toBeDefined();
  });
});
`;

export * from "./helper.js";
export * from "./read.js";
export * from "./library.js";
export * from "./home.js";
export * from "./details.js";
