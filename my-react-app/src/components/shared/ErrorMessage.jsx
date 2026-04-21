import PropTypes from 'prop-types';
import { Button } from './Button';

export function ErrorMessage({ 
  message, 
  onRetry, 
  className = '',
  icon = true 
}) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 p-8 text-center ${className}`}>
      {icon && (
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <svg className="w68 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      )}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Something went wrong</h3>
        <p className="text-gray-600">{message || 'An unexpected error occurred'}</p>
      </div>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.bool,
};

export default ErrorMessage;