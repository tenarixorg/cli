#!/usr/bin/env node

import { extension } from "./extension";

import { prompt } from "inquirer";

const arg = process.argv[2];

const help = arg === "--help" || arg === "-h";

const farg = help ? "" : arg?.replace(/-/g, "");

main(farg, help);

async function main(arg: string, help: boolean) {
  if (help) {
    console.log("\nUsage:\n");
    console.log("@tenarix/cli [folder] [options]");
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
    const answers2 = await prompt([
      {
        type: "input",
        name: "name",
        message: "Extension name:",
        default: "my-extension",
      },
      {
        type: "input",
        name: "folder",
        message: "Folder:",
        default: arg || "extension",
      },
    ]);
    extension(answers2.name, answers2.folder);
  }
}
