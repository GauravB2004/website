import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import PropertyPage from './pages/PropertyPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import './App.css';
import LoginStatus from './pages/login';

// import ProtectedRoute from './components/ProtectedRoute';



//import LoginForm from './components/LoginForm';
//import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="background-image">
      <div><LoginStatus/></div>
    <Router>
      {/* Navbar can be placed here if it's common across all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
