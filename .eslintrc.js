module.exports = {
    env: {
        es6: true,
        node: true,
        mocha: true
    },
    globals: {
        expect: 'readonly,',
        should: 'readonly',
        assert: 'readonly'
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'no-unused-vars': 0
    }
}
