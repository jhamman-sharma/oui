var paths = {
  // Limiting linter to first-part directories.
  'styles' : [
      'src/oui/**/*.scss',
      '!src/oui/library/**/*.scss',
  ],
  cssDest: './dist/css/',
  oui: './src/oui/oui.scss',
  extrasDestName: 'oui-extras.css',
  extrasCSS: '',
  svgs: 'node_modules/oui-icons/src/16/'
};

// Building flat CSS with base64 icons for use in extras apps

module.exports = {
  paths: paths
}
