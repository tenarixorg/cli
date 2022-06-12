export const index = (
  name: string,
  lang: string
) => `import { AppContent, GetContent, Parser } from "@tenarix/extension";
import { _details } from "./details";
import { _library } from "./library";
import { _home } from "./home";
import { _read } from "./read";

export default (getContent: GetContent, parser: Parser): AppContent => {
  const details = _details(getContent, parser);
  const library = _library(getContent, parser);
  const home = _home(getContent, parser);
  const read = _read(getContent, parser);
  return {
    name: "${name}",
    lang: "${lang}",
    details,
    home,
    library,
    read
  };
};
`;

export * from "./details";
export * from "./home";
export * from "./library";
export * from "./read";
