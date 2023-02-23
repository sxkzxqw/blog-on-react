import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './components/styles/app.css'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { authContext } from './components/context';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (localStorage.getItem('auth')) {
        setIsAuth(true);
      }
      setIsLoading(false)
    }, [])

    return (
      <authContext.Provider value ={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </authContext.Provider>
    )
}

export default App;
