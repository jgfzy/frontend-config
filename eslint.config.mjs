// ESLint 官方核心js规则集
import js from "@eslint/js";
// 关闭与 Prettier 冲突的 ESLint 规则
import eslintConfigPrettier from "eslint-config-prettier";
// Vue 单文件组件专用规则插件
import pluginVue from "eslint-plugin-vue";
// ESLint 配置定义工具
import { defineConfig } from "eslint/config";
// 全局变量定义(如 browser/node 环境变量)
import globals from "globals";
// TypeScript 相关的 ESLint 规则集和解析器
import tseslint from "typescript-eslint";

// ESLint配置文件全部写在 defineConfig 函数中,数组中每一个元素为一个配置对象
export default defineConfig([
  // 该配置对象用于设置 ESLint 的工作目录和忽略文件
  {
    ignores: [
      "node_modules",
      "*.md",
      ".vscode",
      ".husky",
      ".idea",
      "dist",
      "/public",
      "/docs",
      ".husky",
      ".local",
      "/bin",
    ],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
  },
  {
    // 设置该配置对象生效的文件
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    // 注册插件
    plugins: { js },
    // 启用js推荐规则集
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    // 配置语言环境：注入浏览器全局变量(如 window, document)
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  // 启用ts推荐规则集
  tseslint.configs.recommended,
  // 启用 Vue 3 基础规则集
  pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    // 指定Vue文件中ts解析器
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  //启用 Prettier 规则集,关闭与 Prettier 冲突的 ESLint 规则
  eslintConfigPrettier,
  {
    // 配置自定义规则
    rules: {
      // 禁止使用 var 声明变量
      "no-var": "error",
    },
  },
]);
