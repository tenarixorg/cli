export const index = (
  id: string,
  name: string
) => `import { Language } from "@tenarix/core";

const lang: Language = {
  id: "${id.toLowerCase()}",
  name: "${name.toLowerCase()}",
  home: {
    head: "",
  },
  details: {
    chapters: "",
    genders: "",
    status: "",
  },
  library: {
    head: "",
  },
  favorites: {
    head: "",
  },
  extensions: {
    pin_option_text: "",
    search_placeholder: "",
    select_title: "",
  },
  settings: {
    options_1: {
      advanced: {
        option_text: "",
      },
      language: {
        option_text: "",
        content: {
          head_text: "",
          sub_text: "",
        },
      },
      appearance: {
        option_text: "",
        content: {
          sub_text1: "",
          sub_text2: "",
          btn_text1: "",
          btn_text2: "",
          head_text: "",
          radios: {
            text1: "",
            text2: "",
          },
        },
      },
      head: "",
    },
  },
};

export default lang;
`;
