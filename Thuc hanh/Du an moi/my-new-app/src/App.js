import React from 'react';
import { BackgroundColorProvider } from './BackgroundColorContext';
import BackgroundChanger from './BackgroundChanger'; // Component to change the background

function App() {
  return (
    <BackgroundColorProvider>
      <div>
        <BackgroundChanger />
      </div>
    </BackgroundColorProvider>
  );
}

export default App;
