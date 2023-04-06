import React from 'react';
import { useAppSelector } from './hooks/storeHook';

import Header from './components/Header';

import './App.css';

const App = () => {

  const { darkTheme } = useAppSelector( state => state);

  return (
    <div className={ darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
       <Header />
        
      </div>
    </div>
  );
}

export default App;
