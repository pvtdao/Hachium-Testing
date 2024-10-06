import PropTypes from 'prop-types'
import React from 'react'

Button.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
}

function Button(props) {
  const {
    children,
    fullWidth = false,
    className = '',
    type = 'button',
    ...rest
  } = props
  return (
    <button
      {...rest}
      className={`select-none curos-pointer  border-solid border ${
        fullWidth && 'w-full'
      }  ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
