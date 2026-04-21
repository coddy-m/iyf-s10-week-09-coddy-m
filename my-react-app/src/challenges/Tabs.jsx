import { useState } from 'react';
import PropTypes from 'prop-types';

export function Tabs({ tabs, defaultIndex = 0, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab.id || index}
            onClick={() => setActiveIndex(index)}
            className={`
              px-4 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2
              ${activeIndex === index 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultIndex: PropTypes.number,
  className: PropTypes.string,
};

export default Tabs;