import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faInfoCircle,
  faCheckCircle,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

const Alert = ({ align, className, children, variant, onClose, ...others }) => {
  return (
    <div
      className={classnames('rcl-alert', className, {
        [`rcl-alert--${variant}`]: variant,
        [`rcl-alert--${align}`]: align,
      })}
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
      {...others}
    >
      {(variant === 'info' || !variant) && (
        <Icon icon={faInfoCircle} size="lg" color="white" />
      )}
      {variant === 'success' && (
        <Icon icon={faCheckCircle} size="lg" color="white" />
      )}
      {variant === 'warning' && (
        <Icon icon={faExclamationCircle} size="lg" color="white" />
      )}
      {variant === 'error' && (
        <Icon icon={faTimesCircle} size="lg" color="white" />
      )}
      <div className="rcl-alert__body">{children}</div>
      {onClose && (
        <div className="rcl-alert__footer">
          <Button
            className="rcl-alert__btn"
            variant="hollow"
            onClick={onClose}
            aria-hidden="true"
          >
            <Icon icon={faTimes} size="lg" color="white" />
          </Button>
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  /** Aligns the text inside of the alert. */
  align: PropTypes.oneOf(['right', 'center']),
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** onClose Callback */
  onClose: PropTypes.func,
  /** Alert content. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Specifies the alert theme variation. */
  variant: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
};

Alert.defaultProps = {
  align: null,
  className: '',
  onClose: null,
  children: null,
  text: '',
  variant: null,
};

export default Alert;
