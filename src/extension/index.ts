import fs from "fs";
import git from "simple-git";
import { join } from "path";

export async function extension(name: string, dir: string, lang: string) {
  if (name && dir && lang) {
    if (lang.length !== 2) {
      console.log("Language id must be 2 characters long.");
      return;
    }
    const __root = join(dir);

    console.log("initializing git repo...");

    const gitRepo = git();

    await gitRepo.clone(
      "https://github.com/tenarixorg/extension-template.git",
      __root
    );

    const pkg_r = fs.readFileSync(join(__root, "package.json"));

    const pkg = JSON.parse(pkg_r.toString());

    pkg.name = `@tenarix-ext/${dir}`;

    const pkg_w = fs.createWriteStream(join(__root, "package.json"));

    pkg_w.write(JSON.stringify(pkg, null, 2));

    pkg_w.close();

    const ext = fs.readFileSync(join(__root, "src", "index.ts"));

    const ext_w = fs.createWriteStream(join(__root, "src", "index.ts"));

    ext_w.write(
      ext
        .toString()
        .replace(/"name"/g, '"' + name + '"')
        .replace(/"lang"/g, '"' + lang + '"')
    );

    ext_w.close();

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
