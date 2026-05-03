import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = fileURLToPath(new URL(".", import.meta.url));
const pkg = JSON.parse(readFileSync(`${root}/package.json`, "utf-8")) as {
  name: string;
};

function productionBase(): string {
  const b = process.env.VITE_BASE;
  if (b === "/" || b === "") return "/";
  if (b != null) {
    const t = b.replace(/^\/+|\/+$/g, "");
    return t ? `/${t}/` : "/";
  }
  return `/${pkg.name}/`;
}

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? productionBase() : "/",
}));
