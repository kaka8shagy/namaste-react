import React, { useState } from 'react';
// import './Card.css'; // Assuming the CSS file is named Card.css

const Card = ({ children, title }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>{title}</h4>
        <button onClick={toggleCollapse} className="card-toggle-button">
          {collapsed ? 'Open' : 'Close'}
        </button>
      </div>
      <div className={`card-content ${collapsed ? 'collapsed' : 'expanded'}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
