import del from "rollup-plugin-delete";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/randomString.ts",
  output: [
    {
      format: "cjs",
      file: `dist/randomString.cjs.js`,
    },
    {
      format: "es",
      file: `dist/randomString.js`,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    babel({ extensions: [".js", ".ts"], babelHelpers: "bundled" }),
    terser(),
  ],
};
