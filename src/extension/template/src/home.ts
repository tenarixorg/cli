export const home = `import { Home, GetContent, Parser } from "@tenarix/extension";\n
export const _home = (content: GetContent, parser: Parser) => {
  return async (execPath: string): Promise<Home> => {
    const { innerHTML } = await content("https://baseurl", execPath);
    const $ = parser(innerHTML);
    return {
      popular: [
        {
          img: "",
          title: "",
          type: "",
          route: "",
        },
      ],
    };
  };
};
`;
