import React from 'react';

export const ShowTask = ({tasklist, setTasklist , task , setTask}) => {
  const handledit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id)
    setTask(selectedTask);
    // const updatedTasklist = 


  }

  const handedelete = (id) => {
    const updatedTasklist = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTasklist);
  }
  return (
    <section className="showTask"> 

        <div className='head'>
          <div>
            <span className='title'>Todo</span>
            <span className='count'>{tasklist.length}</span>
;
          </div>
          <button onClick={() => setTasklist([])} className='clearAll' > clear All</button>

        </div>
        <ul>
          {tasklist.map((todo) => (
            <li key={todo.id}>
            <p>
              <span className='name'>{todo.name}</span>
              <span className='time'> {todo.time}</span>
            </p>
            <i onClick={() => handledit(todo.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handedelete(todo.id)}  className="bi bi-trash"></i>
          </li>

          ))}
           
          
        </ul>
    </section >
  )
}
