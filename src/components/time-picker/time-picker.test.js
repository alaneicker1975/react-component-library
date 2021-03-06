import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import TimePicker from './TimePicker';

configure({ adapter: new Adapter() });

describe('<TimePicker />', () => {
  let timepicker;
  let onChangeSpy = sinon.spy();

  beforeEach(() => {
    timepicker = mount(
      <TimePicker
        hasError
        hour="4"
        minutes="30"
        amOrPm="PM"
        onChange={onChangeSpy}
      />,
    );
  });

  it('Should trigger onChange callback', () => {
    timepicker
      .find('select[data-test-id="timepicker-hour-dropdown"]')
      .simulate('change');
    expect(onChangeSpy.called).toBeTruthy();

    timepicker
      .find('select[data-test-id="timepicker-minutes-dropdown"]')
      .simulate('change');
    expect(onChangeSpy.called).toBeTruthy();

    timepicker
      .find('select[data-test-id="timepicker-amOrPm-dropdown"]')
      .simulate('change');
    expect(onChangeSpy.called).toBeTruthy();
  });

  it('Should display the error text', () => {
    expect(timepicker.find('Hint')).toHaveLength(1);
  });
});
