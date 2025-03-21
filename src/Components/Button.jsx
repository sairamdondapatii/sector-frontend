import React from 'react';

const Button = ({ text, link, className }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      className={`inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                 hover:bg-blue-700 hover:scale-105 transition-transform duration-200 ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
