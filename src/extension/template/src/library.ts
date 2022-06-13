export const library = `import { Filters, GetContent, Library, Parser } from "@tenarix/core";\n
const libraryParams = (page: string, filters?: Filters) => {
  return "https://baseurl?doSearch&&usingPage&&filters";
};

export const _library = (content: GetContent, parser: Parser) => {
  return async (page: string, execPath: string, filters?: Filters): Promise<Library> => {
    const { innerHTML } = await content(libraryParams(page, filters), execPath);
    const $ = parser(innerHTML);
    return {
      items: [],
    };
  };
};
`;
