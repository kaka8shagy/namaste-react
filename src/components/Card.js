import React, { useState } from 'react';
// import './Card.css'; // Assuming the CSS file is named Card.css

const Card = ({ children, title, showItems, setOpen }) => {
  return (
    <div className="p-4 bg-gray-100 shadow-lg rounded-lg w-[600px] ">
      <div className="flex justify-between items-center cursor-pointer" onClick={setOpen}>
        <h4 className="font-bold">{title}</h4>
        <button  className="card-toggle-button cursor-pointer">
          {showItems ? '🔼' : '🔽' }
        </button>
      </div>
      <div className={`${showItems ? '' : 'hidden'} max-h-[400px] overflow-y-auto mt-4`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
