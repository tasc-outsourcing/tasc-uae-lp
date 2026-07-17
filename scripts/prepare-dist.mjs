import { cp, rename, rm } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");

const routeMoves = [
  {
    sourceDir: resolve(distDir, "GRC"),
    tempDir: resolve(distDir, "__grc-route-tmp"),
    targetDir: resolve(distDir, "grc")
  },
  {
    sourceDir: resolve(distDir, "Emiratisation 2026"),
    targetDir: resolve(distDir, "emiratisation-webinar")
  }
];

for (const { sourceDir, tempDir, targetDir } of routeMoves) {
  if (tempDir) {
    await rm(tempDir, { force: true, recursive: true });
    await rename(sourceDir, tempDir);
    await rm(targetDir, { force: true, recursive: true });
    await rename(tempDir, targetDir);
  } else {
    await rm(targetDir, { force: true, recursive: true });
    await rename(sourceDir, targetDir);
  }
}

await rm(resolve(distDir, "it-recruitment-agency-in-dubai"), { force: true, recursive: true });
await cp(resolve("Tech Recruitment", "dist"), resolve(distDir, "it-recruitment-agency-in-dubai"), {
  recursive: true
});
