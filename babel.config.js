//=============== for remove Console log ================
const removeConsolePlugin = []
if (process.env.NODE_ENV === 'production') {
  removeConsolePlugin.push('transform-remove-console')
}
//=======================================================
module.exports = {
  plugins: ['@babel/plugin-transform-runtime'],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  overrides: [
    {
      test: '*.vue',
      presets: [['@vue/app']]
    },
    {
      test: '**/*.jsx',
      presets: ['@babel/preset-react'],
      plugins: ['@babel/plugin-transform-react-jsx']
    }
  ]
}
