import React from 'react'

function TaskForm() {
  return (
    <div>
        <form >
            <input type="text" name='TaskName' placeholder='Inserte tarea a agendar' />
            <button>Agregar</button>
        </form>
    </div>
  )
}

export default TaskForm