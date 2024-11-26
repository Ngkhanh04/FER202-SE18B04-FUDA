import React, { createContext, useState } from 'react';

// Create a context
export const BackgroundColorContext = createContext();

// Create the provider component
export const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Initial color

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <BackgroundColorContext.Provider value={{ backgroundColor, changeBackgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};
