import React from 'react';
import { supabase } from '../supabase/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';



function Home() {

    const navigate = useNavigate()
    useEffect(()=>{
        if(!supabase.auth.getUser())
            navigate('/login');
    }, [navigate])


  return (
    <div>Home
        <button onClick={async ()=> await supabase.auth.signOut()}>Log out</button>

        <TaskForm/>
    </div>
  )
}

export default Home