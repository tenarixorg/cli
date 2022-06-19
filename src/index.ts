#!/usr/bin/env node

import { extension } from "./extension";
import { language } from "./language";
import { prompt } from "inquirer";

const arg = process.argv[2];

const help = arg === "--help" || arg === "-h";

const farg = help ? "" : arg?.replace(/-/g, "");

main(farg, help);

async function main(arg: string, help: boolean) {
  if (help) {
    console.log("\nUsage:\n");
    console.log("@tenarix/cli [options]");
    console.log("\nOptions:\n");
    console.log("-h, --help", "\t\t", "Show this help message.");
    return;
  }

  const answers1 = await prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to create?",
      choices: ["Extension", "Language"],
    },
  ]);

  if (answers1.action === "Extension") {
    const answers = await prompt([
      {
        type: "input",
        name: "name",
        message: "Extension name:",
        default: "my-extension",
      },
      {
        type: "input",
        name: "folder",
        message: "Package name:",
        default: arg || "extension",
      },
      {
        type: "input",
        name: "lang",
        message: "Language:",
        default: "en",
      },
    ]);
    await extension(answers.name, answers.folder, answers.lang);
  }
  if (answers1.action === "Language") {
    const answers = await prompt([
      {
        type: "input",
        name: "name",
        message: "Language name:",
        default: "English",
      },
      {
        type: "input",
        name: "id",
        message: "ID:",
        default: arg || "en",
      },
    ]);
    await language(answers.name, answers.id);
  }
}
