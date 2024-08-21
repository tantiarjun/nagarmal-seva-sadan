import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, style, className, disabled, type , icon}) => {
  const getClassNames = () => {
    let baseClass = 'reusable-button';
    if (type) {
      baseClass += ` button--${type}`;
    }
    if (className) {
      baseClass += ` ${className}`;
    }
    return baseClass;
  };

  return (
    <button
      onClick={onClick}
      style={style}
      className={getClassNames()}
      disabled={disabled}
    >
      {text}
      {icon && <img src={icon} alt="Button Icon" className="button-icon"/>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'fourth', 'fifth']),
  icon: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  className: '',
  disabled: false,
  type: 'primary',
  icon: '',
};

export default Button;