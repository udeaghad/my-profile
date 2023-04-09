import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './hooks/storeHook';

import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';

import './App.css';

const App = () => {

  const { darkTheme } = useAppSelector( state => state);

  return (
    <div className={ darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <Header />
        <Routes>
          <Route path='/' element={ <ProfilePage /> } />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
