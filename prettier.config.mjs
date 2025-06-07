/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  // 每行最大字符数
  printWidth: 100,
  // tab键缩进空格数
  tabWidth: 2,
  // 使用空格而不是制表符
  useTabs: false,
  // 在行尾添加分号
  semi: true,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 对象的属性名使用引号
  quoteProps: 'as-needed',
  // 在 JSX 中使用单引号
  jsxSingleQuote: true,
  // 在多行逗号分隔的最后一个元素后添加逗号
  trailingComma: 'none',
  // 在对象、数组等的括号内添加空格
  bracketSpacing: true,
  // 在 JSX 标签的闭合括号后将 `>` 放在同一行
  jsxBracketSameLine: false,
  // 箭头函数参数使用括号
  arrowParens: 'always',
  // 在 HTML、Vue 和 JSX 中使用单行模式
  proseWrap: 'preserve',
  // 在 HTML、Vue 和 JSX 中的空格敏感度
  htmlWhitespaceSensitivity: 'css',
  // 换行符类型
  endOfLine: 'lf',
  // 格式化嵌入的语言
  embeddedLanguageFormatting: 'auto',
  // 不需要在文件顶部添加格式化注释
  requirePragma: false,
  // 不需要在文件顶部添加格式化注释
  insertPragma: false
};

export default config;
