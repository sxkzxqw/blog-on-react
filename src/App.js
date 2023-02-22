import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './components/styles/app.css'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    )
}

export default App;
