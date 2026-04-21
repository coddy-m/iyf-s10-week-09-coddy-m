import PropTypes from 'prop-types';

export function Avatar({ 
  src, 
  alt, 
  name, 
  size = 'medium', 
  className = '' 
}) {
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-10 h-10 text-base',
    large: 'w-16 h-16 text-xl',
    xlarge: 'w-24 h-24 text-2xl'
  };

  const getInitials = (fullName) => {
    if (!fullName) return '?';
    const names = fullName.trim().split(' ');
    if (names.length === 1) return names[0][0]?.toUpperCase() || '?';
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  };

  const avatarContent = src ? (
    <img 
      src={src} 
      alt={alt || name} 
      className="w-full h-full rounded-full object-cover"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
  ) : (
    <span className="w-full h-full rounded-full bg-primary text-white flex items-center justify-center font-medium">
      {getInitials(name)}
    </span>
  );

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        rounded-full bg-gray-200 flex items-center justify-center overflow-hidden
        ${className}
      `}
      title={alt || name}
    >
      {avatarContent}
      {!src && <span className="sr-only">{alt || name}</span>}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string,
};

export default Avatar;