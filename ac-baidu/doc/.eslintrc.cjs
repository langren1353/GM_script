module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true // 这是为了兼容defineProps这种API的
    },
    extends: [
        'plugin:vue/vue3-recommended', // 兼容vue3语法规范
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser', // 这个插件其实已经安装了，用来解析template语法
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        'prettier/prettier': 'error',
        'linebreak-style': ['error', 'windows'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
}
