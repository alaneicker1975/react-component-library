module.exports = {
  content: './styleguide/docs/Informational.md',
  name: 'Informational',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/alert/Alert.jsx',
    'src/components/badge/Badge.jsx',
    'src/components/hint/Hint.jsx',
    'src/components/label/Label.jsx',
    'src/components/progress-bar/ProgressBar.jsx',
    'src/components/price/Price.jsx',
    'src/components/rating/Rating.jsx',
    'src/components/statistic/Statistic.jsx',
    'src/components/spinner/Spinner.jsx',
    'src/components/tooltip/Tooltip.jsx',
  ],
};
