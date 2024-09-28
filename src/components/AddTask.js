import React from 'react'

export const AddTask = ({tasklist, setTasklist}) => {
  const handlesubmit = (e) => {
    e.preventDefault();
    
    const date =  new Date();
    const newTask = {

    }
  }


  return (
    <section className='addTask'>
      <form onSubmit={handlesubmit}>
        <input type="text" name="task" autoComplete='off' placeholder='add task' maxLength="25"/>
        <button type="submit"> Add</button>

      </form>
      
    </section>
  )
}
