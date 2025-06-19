import React, { useState, useEffect } from 'react'
import Form from './routes/Form'
import Dashboard from './routes/Dashboard';
import NavBar from './components/NavBar';
import { Categorias } from './routes/Categorias';
import Movimientos from './routes/Movimientos';

const App = () => {
  // Leer token y ruta de localStorage al iniciar
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [ruta, setRuta] = useState(() => {
    // Si hay token, usa la ruta guardada o dashboard; si no, forzar login
    const rutaGuardada = localStorage.getItem('ruta');
    if (token) {
      // Si rutaGuardada es una ruta válida, úsala, si no dashboard
      const rutasValidas = ['/dashboard', '/categorias', '/movimientos'];
      return rutasValidas.includes(rutaGuardada) ? rutaGuardada : '/dashboard';
    } else {
      return '/';
    }
  });

  // Cada vez que cambie la ruta, guárdala en localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem('ruta', ruta);
    } else {
      localStorage.removeItem('ruta');
    }
  }, [ruta, token]);

  // Login: guardar token, ruta y cambiar estado
  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setRuta('/dashboard');
    localStorage.setItem('ruta', '/dashboard');
  };

  // Logout: limpiar todo y volver a login
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('ruta');
    setToken('');
    setRuta('/');
  };

  return (
    <div className='w-screen h-screen bg-slate-50 flex flex-wrap justify-center '>
      {ruta !== '/' && <NavBar ruta={ruta} setRuta={setRuta} onLogout={handleLogout} />}

      {ruta === '/' ? (
        <Form ruta={setRuta} />

      ) : ruta === '/dashboard' ? (
        <Dashboard token={token} />
      ) : ruta === '/categorias' ? (
        <Categorias token={token} />
      ) : ruta === '/movimientos' ? (
        <Movimientos token={token} />
      ) : null}
    </div>
  );
};

export default App;
