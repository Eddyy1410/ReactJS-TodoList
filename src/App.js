import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // useEffect(() => { //thực hiện sau đoạn code khi giá trị State thay đổi
  //   console.log('Task đã thay đổi: ',task)
  // }, [task]);

  const addTask = () => {
    console.log('Add task: ',task);
    setTasks([...tasks, task])
    setTask("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <br />
        Todo List
        <br />
        <form className='aligned'>
          <img
            src='./assests/add_plus_icon.png'
            alt='Add Task'
            width='25'
            style={{cursor: 'pointer'}}
            title='Add task'
            onClick={addTask}
          />
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
        <br/>
        <ul>
          {tasks.map((t,index) => (
            <li key={index} className='taskItem'>{t}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
