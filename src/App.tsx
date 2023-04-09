import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './hooks/storeHook';

import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';

import './App.css';
import Projects from './pages/Projects';

const App = () => {

  const { darkTheme } = useAppSelector( state => state);

  return (
    <div className={ darkTheme ? "dark" : ""}>
      <div className="bg-[#e7edfb] dark:bg-gray-900 dark:text-white min-h-screen">
        <Header />
        <Routes>
          <Route path='/' element={ <ProfilePage /> } />
          <Route path='/Projects' element={ <Projects /> } />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
