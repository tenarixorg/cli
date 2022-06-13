import fs from "fs";
import git from "simple-git";
import { readme, npmignore, gitignore, tsconfigjson } from "../common";
import { join } from "path";
import {
  env,
  read,
  home,
  tread,
  thome,
  index,
  tindex,
  thelper,
  details,
  library,
  tdetails,
  tlibrary,
  jestconfig,
  packagejson,
} from "./template";

export async function extension(name: string, dir: string, lang: string) {
  if (name && dir && lang) {
    if (lang.length !== 2) {
      console.log("Language id must be 2 characters long.");
      return;
    }
    const __root = join(dir);

    console.log("creating files...");

    fs.mkdirSync(join(__root, "src/"), { recursive: true });
    const indexF = fs.createWriteStream(join(__root, "src/", "index.ts"));
    const libraryF = fs.createWriteStream(join(__root, "src/", "library.ts"));
    const readF = fs.createWriteStream(join(__root, "src/", "read.ts"));
    const detailsF = fs.createWriteStream(join(__root, "src/", "details.ts"));
    const homeF = fs.createWriteStream(join(__root, "src/", "home.ts"));
    const packageF = fs.createWriteStream(join(__root, "package.json"));
    const tsconfigF = fs.createWriteStream(join(__root, "tsconfig.json"));
    const envF = fs.createWriteStream(join(__root, ".env"));
    const gitignoreF = fs.createWriteStream(join(__root, ".gitignore"));
    const npmignoreF = fs.createWriteStream(join(__root, ".npmignore"));
    const jestconfigF = fs.createWriteStream(join(__root, "jest.config.js"));
    const readmeF = fs.createWriteStream(join(__root, "README.md"));
    fs.mkdirSync(join(__root, "test/helper/"), { recursive: true });
    const tindexF = fs.createWriteStream(
      join(__root, "test/", "index.spec.ts")
    );
    const tlibraryF = fs.createWriteStream(
      join(__root, "test/", "library.spec.ts")
    );
    const treadF = fs.createWriteStream(join(__root, "test/", "read.spec.ts"));
    const tdetailsF = fs.createWriteStream(
      join(__root, "test/", "details.spec.ts")
    );
    const thomeF = fs.createWriteStream(join(__root, "test/", "home.spec.ts"));
    const thelperF = fs.createWriteStream(
      join(__root, "test/helper/", "index.ts")
    );

    indexF.write(index(name, lang), (err) => {
      if (err) throw err;
      indexF.close();
    });

    libraryF.write(library, (err) => {
      if (err) throw err;
      libraryF.close();
    });

    readF.write(read, (err) => {
      if (err) throw err;
      readF.close();
    });

    detailsF.write(details, (err) => {
      if (err) throw err;
      detailsF.close();
    });

    homeF.write(home, (err) => {
      if (err) throw err;
      homeF.close();
    });

    tindexF.write(tindex, (err) => {
      if (err) throw err;
      tindexF.close();
    });

    tlibraryF.write(tlibrary, (err) => {
      if (err) throw err;
      tlibraryF.close();
    });

    treadF.write(tread, (err) => {
      if (err) throw err;
      treadF.close();
    });

    tdetailsF.write(tdetails, (err) => {
      if (err) throw err;
      tdetailsF.close();
    });

    thomeF.write(thome, (err) => {
      if (err) throw err;
      thomeF.close();
    });

    thelperF.write(thelper, (err) => {
      if (err) throw err;
      thelperF.close();
    });

    packageF.write(packagejson(name), (err) => {
      if (err) throw err;
      packageF.close();
    });

    envF.write(env, (err) => {
      if (err) throw err;
      envF.close();
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
