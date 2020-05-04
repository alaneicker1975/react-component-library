module.exports = {
  name: 'Data Display',
  content: './styleguide/docs/DataDisplay.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/avatar/Avatar.js',
      'src/components/list/List.js',
      'src/components/list/ListItem.js',
    ];
  },
  sections: [
    {
      name: 'Icons',
      content: 'src/components/icon/Icon.md',
      usageMode: 'expand',
      exampleMode: 'expand',
    },
    {
      name: 'Table',
      content: 'src/components/table/Table.md',
      usageMode: 'expand',
      exampleMode: 'expand',
    },
  ],
};
