import React, { useContext } from 'react';
import { BackgroundColorContext } from './BackgroundColorContext';

const BackgroundChanger = () => {
  const { backgroundColor, changeBackgroundColor } = useContext(BackgroundColorContext);

  const handleColorChange = () => {
    const newColor = backgroundColor === 'white' ? 'red' : 'black';
    changeBackgroundColor(newColor);
  };

  return (
    <div style={{ backgroundColor, height: '100vh' }}>
      <button onClick={handleColorChange}>Change Background Color</button>
    </div>
  );
};

export default BackgroundChanger;
