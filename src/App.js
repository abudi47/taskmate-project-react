import { useEffect, useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';

function App() {
  // Check if localStorage contains valid JSON or fallback to an empty array
  const storedTaskList = localStorage.getItem("tasklist");
  let initialTaskList = [];

  try {
    initialTaskList = storedTaskList ? JSON.parse(storedTaskList) : [];
  } catch (e) {
    console.error("Error parsing localStorage tasklist:", e);
    initialTaskList = [];
  }

  const [tasklist, setTasklist] = useState(initialTaskList);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
