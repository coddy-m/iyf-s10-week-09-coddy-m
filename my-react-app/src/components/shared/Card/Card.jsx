import PropTypes from 'prop-types';

export function Card({ 
  children, 
  title, 
  subtitle, 
  actions, 
  className = '', 
  hover = true,
  ...props 
}) {
  return (
    <div 
      className={`
        card
        ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
        ${className}
      `}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div className="text-gray-700">
        {children}
      </div>
      
      {actions && (
        <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
          {actions}
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;