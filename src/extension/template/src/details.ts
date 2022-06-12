export const details = `import { Details, GetContent, Parser } from "@tenarix/extension";\n
export const _details = (content: GetContent, parser: Parser) => {
  return async (route: string, execPath: string): Promise<Details> => {
    const url = "https://baseurl" + route;
    const { innerHTML } = await content(url, execPath);
    const $ = parser(innerHTML);

    return {
      title: "",
      description: "",
      status: "",
      img: "",
      type: "",
      genres: [],
      chapters: [],
    };
  };
};
`;
