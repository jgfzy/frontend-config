/** @type {import('stylelint').Config} */
export default {
  ignoreFiles: [
    '**/*.js',
    '**/*.mjs',
    '**/*.cjs',
    '**/*.ts',
    '**/*.mts',
    '**/*.cts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml'
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue',
    'stylelint-config-clean-order'
  ]
};
