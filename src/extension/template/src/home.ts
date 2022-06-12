export const home = `import { Home, GetContent, Parser } from "@tenarix/extension";\n
export const _home = (content: GetContent, parser: Parser) => {
  return async (): Promise<Home> => {
    const { innerHTML } = await content("https://baseurl");
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
