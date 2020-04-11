import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import ButtonGroup from './ButtonGroup';
import Button from '../button';

configure({ adapter: new Adapter() });

describe('<ButtonGroup />', () => {
  let buttonGroup;

  beforeEach(() => {
    buttonGroup = mount(
      <ButtonGroup label="Favorite Car Brand">
        <Button>Chevrolet</Button>
        <Button classes="is-selected">Ford</Button>
        <Button>GMC</Button>
      </ButtonGroup>,
    );
  });

  it('Should render without errors', () => {
    expect(buttonGroup.length).toBe(1);
  });

  it('Should render help hint with text', () => {
    buttonGroup.setProps({ helpText: 'Help text' });

    expect(buttonGroup.find('.hint').length).toBe(1);
    expect(buttonGroup.find('.hint').text()).toBe('Help text');
  });

  it('Should render error hint with text', () => {
    buttonGroup.setProps({ errorText: 'Error text', hasError: true });

    expect(buttonGroup.find('.hint--error').length).toBe(1);
    expect(buttonGroup.find('.hint--error').text()).toBe('Error text');
  });
});
