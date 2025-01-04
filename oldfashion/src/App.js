import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserProfilePage from './pages/UserProfilePage';
import GameDetailsPage from './pages/GameDetailsPage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
  );
}

export default App;

//Remove later
console.log('Component Rendered');


