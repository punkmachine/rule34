module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // нет консоль логам в проде!
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // нет дебаггеру!
    'no-var': 'error', // нельзя использоваь var
    'no-duplicate-imports': 'error', // нельзя делать дублирующиеся импорты
    'no-duplicate-case': 'error', // нельзя использовать дублирующийся case
    'no-unused-vars': 'warn', // предупреждения о не используемых переменных
    'no-lonely-if': 'off', // если включить, в блоке else нельзя будет оставлять только один if/else
    'no-inline-comments': 'off', // пока не выключил, ругалось на комментарии в коде в той же строке, что и код
    'no-extra-boolean-cast': 'off', // выключает запрет на использование двойного отрицания
    'no-extra-semi': 'error', // запрещает не нужные точки с запятой
    'spaced-comment': 'off', // если включить, будет требоваться пробел перед комментом
    'prefer-const': 'off', // отключает требование к объявлению всех неизменяемых переменных как констант
    'no-whitespace-before-property': 'error', // запрещает пробелы перед методами 
    'no-trailing-spaces': 'off', // если включить, то будет ругаться на пробелы в конце строк
    'no-multi-spaces': 'error', // запрещает несколько подряд идущих пробелов
    "vue/comment-directive": ["error", {
      "reportUnusedDisableDirectives": false
    }]
  }
}
