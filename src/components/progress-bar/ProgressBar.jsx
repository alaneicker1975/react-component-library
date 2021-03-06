import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import setTheme from '../../utilities/setTheme';

const ProgressBar = ({
  animated,
  className,
  label,
  now,
  shape,
  theme,
  themeVariant,
  thickness,
  ...others
}) => (
  <div
    className={classnames(
      'atomikui-progress-bar',
      className,
      [animated && 'animated', shape, thickness].map((prop) => ({
        [`atomikui-progress-bar--${prop}`]: prop,
        [setTheme('atomikui-progress-bar', theme, themeVariant)]: theme,
      })),
    )}
    {...others}
  >
    <div
      className="atomikui-progress-bar__bar"
      role="progressbar"
      aria-valuenow={now}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: `${now}%` }}
    >
      <span
        className="atomikui-progress-bar__label"
        data-test-id="progress-bar-label"
      >
        {label}
      </span>
    </div>
  </div>
);

ProgressBar.propTypes = {
  /** Animages the progress bar. */
  animated: PropTypes.bool,
  /** Specifies custom component classes. */
  className: PropTypes.string,
  /** Label to be displayed with progress. */
  label: PropTypes.string,
  /** Specifies the percentage complete. */
  now: PropTypes.number,
  /** Progress bar shape */
  shape: PropTypes.oneOf(['pill', 'square']),
  /** Specifies the color variation. */
  theme: PropTypes.oneOf([
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'sky-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'light-orange',
    'orange',
    'deep-orange',
    'amber',
    'brown',
    'gray',
    'blue-gray',
    'black',
    'white',
  ]),
  /** The theme color variant */
  themeVariant: PropTypes.oneOf(['light']),
  /** Progress bar thickness */
  thickness: PropTypes.oneOf(['thin', 'thick', 'extra-thick']),
};

ProgressBar.defaultProps = {
  animated: false,
  className: '',
  label: '',
  now: 0,
  shape: null,
  theme: null,
  themeVariant: null,
  thickness: null,
};

export default ProgressBar;
