import React, { useContext } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Hint from '../hint/Hint';
import Label from '../label/Label';
import ThemeContext from '../../themeContext';
import generateId from '../../utilities/generateId';

const types = ['checkbox', 'radio'];

const FormOption = ({
  className,
  checked,
  disabled,
  errorText,
  hasError,
  helpText,
  id,
  label,
  name,
  onChange,
  required,
  type,
  ...others
}) => {
  const { theme } = useContext(ThemeContext);
  const uid = id || generateId();
  const inputName = name || uid;
  const inputHintId = `${inputName}_hint`;
  const inputErrorId = `${inputName}_error`;
  const fieldType = !types.includes(type) ? 'checkbox' : type;

  return (
    <>
      <Label
        htmlFor={uid}
        className={classnames('rcl-form-option', className, {
          'has-error': hasError,
          'is-disabled': disabled,
          'rcl-form-option--radio': type === 'radio',
          [`rcl-form-option--${theme}`]: theme,
        })}
      >
        <input
          id={uid}
          type={fieldType}
          name={inputName}
          checked={checked}
          disabled={disabled}
          aria-describedby={`${inputHintId} ${inputErrorId}`}
          onChange={onChange}
          required
          {...others}
        />
        <span className="rcl-form-option__icon">
          {checked && <Icon icon={faCheck} color="white" />}
        </span>
        {label}
      </Label>
      {(helpText || errorText) && (
        <div className="margin-top-2">
          {helpText && <Hint id={inputHintId}>{helpText}</Hint>}
          {hasError && (
            <Hint id={inputErrorId} type="error">
              {errorText}
            </Hint>
          )}
        </div>
      )}
    </>
  );
};

FormOption.propTypes = {
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Specifies the form option checked state. */
  checked: PropTypes.bool,
  /** Specifies form option disabled state. */
  disabled: PropTypes.bool,
  /** Text to be displayed when there is an error. */
  errorText: PropTypes.string,
  /** Specifies the error state. */
  hasError: PropTypes.bool,
  /** Assistive text to be displayed with form field. */
  helpText: PropTypes.string,
  /** A unique id. */
  id: PropTypes.string,
  /** Specifies label text. */
  label: PropTypes.string,
  /** Specifies input name attribute. */
  name: PropTypes.string,
  /** OnChange callback. */
  onChange: PropTypes.func,
  /** Specifies if a field is required. */
  required: PropTypes.bool,
  /** Specifies the type of input. */
  type: PropTypes.oneOf(types),
};

FormOption.defaultProps = {
  className: '',
  checked: false,
  disabled: false,
  errorText: '',
  hasError: false,
  helpText: '',
  id: null,
  label: '',
  name: '',
  onChange() {},
  required: false,
  type: 'checkbox',
};

export default FormOption;
