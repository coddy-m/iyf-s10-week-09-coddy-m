import PropTypes from 'prop-types';

export function LoadingSpinner({ 
  size = 'medium', 
  text = 'Loading...', 
  fullScreen = false,
  className = ''
}) {
  const sizeClasses = {
    small: 'w-3 h-3',
    medium: 'w-6 h-6',
    large: 'w-10 h-10'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className={`spinner ${sizeClasses[size]}`} />
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string,
  fullScreen: PropTypes.bool,
  className: PropTypes.string,
};

export default LoadingSpinner;