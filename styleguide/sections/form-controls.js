module.exports = {
  content: './styleguide/docs/FormControls.md',
  name: 'Form Controls',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/auto-complete/AutoComplete.jsx',
      'src/components/button/Button.jsx',
      'src/components/button-group/ButtonGroup.jsx',
      'src/components/check-option/CheckOption.jsx',
      'src/components/date-picker/DatePicker.jsx',
      'src/components/dropdown/Dropdown.jsx',
      'src/components/file-upload/FileUpload.jsx',
      'src/components/form-field/FormField.jsx',
      'src/components/form-generator/FormGenerator.jsx',
      'src/components/range-slider/RangeSlider.jsx',
      'src/components/search/Search.jsx',
      'src/components/switch/Switch.jsx',
      'src/components/switch-panel/SwitchPanel.jsx',
    ];
  },
};
