const path = require('path');
const sections = require('./styleguide/sections');

module.exports = {
  title: 'React Component Library',
  pagePerSection: true,
  sections: [
    ...sections
  ],
  moduleAliases: {
    'react-component-library': path.resolve(__dirname, 'src')
  },
  styleguideDir: './build',
  require: [
    './src/styles/main.scss',
    './styleguide/styles/main.scss'
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Noto Sans", Helvetica, sans-serif'
    }
  }
}