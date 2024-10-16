import React from 'react'
import { useState, useEffect } from 'react';
import {supabase} from '../supabase/client';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  useEffect(()=>{
      if(supabase.auth.getUser())
          navigate('/');
  }, [navigate])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      console.log(result);
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email"  name='email' placeholder='tuemail@mail.com'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"  name='password' placeholder='xxxxxxxxxx'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Login