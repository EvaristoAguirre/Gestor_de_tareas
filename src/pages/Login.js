import React from 'react'
import { useState } from 'react';
import {client} from '../supabase/client';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await client.auth.signUp({
        email,
        password,
      })
      console.log(data)
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
        <input type="password"  name='password' placeholder='contraseña'
        onChange={(e) => setPassword(e.target.value)}
        />

        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Login