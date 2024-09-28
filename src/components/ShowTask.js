import React from 'react';

export const ShowTask = ({tasklist, setTasklist}) => {
  
  return (
    <section className="showTask"> 

        <div className='head'>
          <div>
            <span className='title'>Todo</span>
            <span className='count'>{tasklist.length}</span>

          </div>
          <button className='clearAll'> clear All</button>

        </div>
        <ul>
          {tasks.map((task) => (
            <li>
            <p>
              <span className='name'>{task.name}</span>
              <span className='time'> {task.time}</span>
            </p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
          </li>

          ))}
           
          
        </ul>
    </section >
  )
}
