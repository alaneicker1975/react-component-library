/* eslint-disable no-undef */
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import { mount, configure } from 'enzyme';
import Modal from './Modal';
import Button from '../button';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  let modal;
  let onCloseSpy;

  beforeEach(() => {
    onCloseSpy = sinon.spy();

    modal = mount(
      <Modal
        title="Modal Title"
        isOpen={false}
        onClose={onCloseSpy}
        footer={
          <div className="text-align-right">
            <p>footer</p>
          </div>
        }
      >
        <p>body</p>
      </Modal>,
    );
  });

  it('Should render without errors', () => {
    expect(modal.length).toBe(1);
  });

  it('Should call onClose when modal close button is clicked', () => {
    modal.find('.modal__close-button').simulate('click');

    expect(onCloseSpy.called).toBe(true);
  });

  it('Should call onClose when modal overlay is clicked', () => {
    modal.find('.modal').simulate('click');

    expect(onCloseSpy.called).toBe(true);
  });

  it('Should call onClose when escape key is pressed', () => {
    modal
      .find('.modal__close-button')
      .simulate('keydown', { key: 'Escape', keyCode: 27, which: 27 });

    expect(onCloseSpy.called).toBe(true);
  });
});
