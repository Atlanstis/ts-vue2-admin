module.exports = {
  root: true,
  env: {
    node: true,
  },
  // 使用插件的编码规则
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  // 自定义编码校验规则
  // 规则配置说明：https://eslint.bootcss.com/docs/user-guide/configuring#configuring-rules
  // 规则说明：https://eslint.bootcss.com/docs/rules/
  // vue + typescript 规则说明：https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制不使用分号结尾
    semi: ['error', 'never'],
    'space-before-function-paren': 'off',
  },
}
