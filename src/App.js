import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';
import { useEffect } from 'react';
import { supabase } from './supabase/client.js';

function App() {

  const navigate = useNavigate();
  useEffect(()=>{
    supabase.auth.onAuthStateChange((event, session)=>{
      if(!session) {
        navigate('/login');
      } else {
        navigate('/');
      }
    })
  },[navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </div>
  );
}

export default App;
