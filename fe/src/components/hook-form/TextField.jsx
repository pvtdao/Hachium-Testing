import PropTypes from 'prop-types'
import React from 'react'
import { useController } from 'react-hook-form'

TextField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  display: PropTypes.string,
}

function TextField(props) {
  const {
    control,
    name,
    className = '',
    fullWidth = false,
    display = 'inline-block',
    ...textFieldProps
  } = props

  const {
    field: { ref: inputRef, ...inputProps },
    fieldState: { error },
  } = useController({ name, control })

  return (
    <div className={`${display} ${fullWidth && 'w-full'}`}>
      <input
        {...inputProps}
        {...inputRef}
        {...textFieldProps}
        className={`relative border px-2 py-1 sm:py-0 rounded outline-none w-full ${className} border-solid border-primary h-full ${
          error && ' border-error'
        }`}
      />
      {!!error && (
        <p className="bottom-0 text-[13px] text-error ml-2 mt-1">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default TextField
