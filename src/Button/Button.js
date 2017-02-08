import React, {Component, PropTypes} from 'react';

export default class Button extends Component {

  static propTypes = {

    // Additional classes
    className: PropTypes.string,

    // Reduced padding button for smaller spaces
    compact: PropTypes.bool,

    // Visual emphasis of a button
    context: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'danger',
      'info',
      'warning'
    ]),

    // Button to show if it can be interacted with or not
    disabled: PropTypes.bool,

    // Button to take full width of container or not
    fill: PropTypes.bool,

    // Label of a button
    label: PropTypes.string,

    // Minimize and remove background of a button
    minimal: PropTypes.bool,

    /**
     * Click handler of a button
     * @param {SyntheticEvent} event - React's SyntheticEvent
     * @param {object} data - Additional information to pass
     */
    onClick: PropTypes.func,

    // Different sizes of a button
    size: PropTypes.oneOf(['small', 'large']),

    // Override style object
    style: PropTypes.object,

    // Different types of a button
    type: PropTypes.oneOf(['button', 'submit', 'link']),

  }

  static defaultProps = {
    compact: false,
    disabled: false,
    fill: false,
    minimal: false,
    type: 'button'
  }

  render () {
    const {
      className,
      compact,
      context,
      disabled,
      fill,
      label,
      minimal,
      onClick,
      size,
      style,
      type
    } = this.props;

    // CSS Classes
    const contextClasses = {
      primary: 'wu-button-primary',
      secondary: 'wu-button-secondary',
      success: 'wu-button-success',
      danger: 'wu-button-danger',
      info: 'wu-button-info',
      warning: 'wu-button-warning'
    }

    const sizeClasses = {
      small: 'wu-button-small',
      large: 'wu-button-large'
    };

    const cssClassNames = [
      'wu-button',
      compact ? 'wu-button-compact' : null,
      context ? contextClasses[context] : 'wu-button-default',
      fill ? 'wu-button-fill' : null,
      minimal ? 'wu-button-minimal' : null,
      size ? sizeClasses[size] : null,
      className
    ].filter(el => el).join(' ').trim();

    // Return Component
    return (
      <button
        className={cssClassNames}
        disabled={disabled}
        style={style}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
