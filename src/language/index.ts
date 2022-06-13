import fs from "fs";
import git from "simple-git";
import { readme, npmignore, gitignore, tsconfigjson } from "../common";
import { packagejson, index, tindex, jestconfig } from "./template";
import { join } from "path";

export async function language(name: string, id: string) {
  if (id && name) {
    if (id.length !== 2) {
      console.log("Language id must be 2 characters long.");
      return;
    }
    const __root = join(id);

    console.log("creating files...");

    fs.mkdirSync(join(__root, "src/"), { recursive: true });
    fs.mkdirSync(join(__root, "test/"), { recursive: true });
    const indexF = fs.createWriteStream(join(__root, "src/", "index.ts"));
    const packageF = fs.createWriteStream(join(__root, "package.json"));
    const tindexF = fs.createWriteStream(
      join(__root, "test/", "index.spec.ts")
    );

    const tsconfigF = fs.createWriteStream(join(__root, "tsconfig.json"));
    const gitignoreF = fs.createWriteStream(join(__root, ".gitignore"));
    const npmignoreF = fs.createWriteStream(join(__root, ".npmignore"));
    const jestconfigF = fs.createWriteStream(join(__root, "jest.config.js"));
    const readmeF = fs.createWriteStream(join(__root, "README.md"));

    indexF.write(index(id, name), (err) => {
      if (err) throw err;
      indexF.close();
    });

    tindexF.write(tindex(id), (err) => {
      if (err) throw err;
      tindexF.close();
    });

    packageF.write(packagejson(id), (err) => {
      if (err) throw err;
      packageF.close();
    });

    gitignoreF.write(gitignore, (err) => {
      if (err) throw err;
      gitignoreF.close();
    });

    npmignoreF.write(npmignore, (err) => {
      if (err) throw err;
      npmignoreF.close();
    });

    tsconfigF.write(tsconfigjson, (err) => {
      if (err) throw err;
      tsconfigF.close();
    });

    jestconfigF.write(jestconfig, (err) => {
      if (err) throw err;
      jestconfigF.close();
    });

    readmeF.write(readme, (err) => {
      if (err) throw err;
      readmeF.close();
    });

    console.log("initializing git repo...");

    const gitRepo = git(__root);

    await gitRepo.init();
    await gitRepo.branch(["-M", "main"]);
    await gitRepo.add(".");
    await gitRepo.commit([
      "chore: extension setup",
      "Created with tenarix cli",
    ]);

    console.log("done...");
  } else {
    throw new Error("Please provide a valid name and directory!");
  }
}
