module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  extends: ['eslint:recommended', '@vue/prettier'],
  plugins: ['vue'],
  rules: {
    // 在这里添加项目中需要自定义的规则
    // 示例：'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
