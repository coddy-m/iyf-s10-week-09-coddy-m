import PropTypes from 'prop-types';

export function Input({
  label,
  error,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  required = false,
  disabled = false,
  className = '',
  ...props
}) {
  const inputId = name || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="mb-5">
      {label && (
        <label 
          htmlFor={inputId}
          className="label"
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          input input-focus-glow
          ${error ? 'input-error' : ''}
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="error-text" role="alert">{error}</p>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;