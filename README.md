## 前端规范化配置包

- 这是一个**前端规范化配置包**，有助于**快速优化配置Vue3项目**，但**不能在扩展中使用**

- 请关注`.vscode`文件夹下的配置以及`eslint`,`prettier`,`stylelint`等相关配置文件的内容

- **请勿在任何其他扩展中导入此包使用**

## 用法：

- 首先下载对应规范化依赖包

```cmd
pnpm i @eslint/js eslint eslint-config-prettier eslint-plugin-vue globals postcss-html prettier sass stylelint stylelint-config-clean-order stylelint-config-standard stylelint-config-standard-scss stylelint-config-standard-vue typescript-eslint
```

- 然后将包中对应配置文件复制使用即可

## 依赖包版本

```json
"devDependencies": {
    "@eslint/js": "^9.28.0",
    "eslint": "^9.28.0",
    "eslint-config-prettier": "^10.1.5",
    "eslint-plugin-vue": "^10.2.0",
    "globals": "^16.2.0",
    "postcss-html": "^1.8.0",
    "prettier": "^3.5.3",
    "sass": "^1.89.1",
    "stylelint": "^16.20.0",
    "stylelint-config-clean-order": "^7.0.0",
    "stylelint-config-standard": "^38.0.0",
    "stylelint-config-standard-scss": "^15.0.1",
    "stylelint-config-standard-vue": "^1.0.0",
    "typescript-eslint": "^8.33.1"
  }
```
