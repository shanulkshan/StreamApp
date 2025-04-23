// components/SportCard.jsx

import React from 'react';

const SportCard = ({ name, image }) => {
  return (
    <div className="bg-gray-700 hover:bg-orange-500 p-4 rounded flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors duration-200">
      <img src={image} alt={name} className="w-10 h-10" />
      <span className="text-white font-semibold text-sm">{name}</span>
    </div>
  );
};

export default SportCard;
