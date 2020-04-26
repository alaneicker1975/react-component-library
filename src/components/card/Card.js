import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ children, className, footer, inverse, title, ...others }) => {
  return (
    <div
      className={classnames('rcl-card', className, {
        'rcl-card--inverse': inverse,
      })}
      {...others}
    >
      {title && <div className="rcl-card__header">{title}</div>}
      {children && <div className="rcl-card__body">{children}</div>}
      {footer && <div className="rcl-card__footer">{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  /** Card body content */
  children: PropTypes.node,
  /** Adds custom component CSS classes */
  className: PropTypes.string,
  /** Card footer */
  footer: PropTypes.node,
  /** Inverse color variant */
  inverse: PropTypes.bool,
  /** Card title */
  title: PropTypes.string,
};

Card.defaultProps = {
  children: <></>,
  className: '',
  footer: <></>,
  inverse: false,
  title: '',
};

export default Card;