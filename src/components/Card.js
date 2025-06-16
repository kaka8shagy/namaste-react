import React, { useState } from 'react';
// import './Card.css'; // Assuming the CSS file is named Card.css

const Card = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="p-4 bg-gray-100 shadow-lg rounded-lg w-[600px] max-h-[400px] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold">{title}</h4>
        <button onClick={toggleCollapse} className="card-toggle-button">
          {collapsed ? 'Open' : 'Close'}
        </button>
      </div>
      <div className={`${collapsed ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
