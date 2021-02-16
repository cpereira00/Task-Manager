import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react' 
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Homework',
        day: 'Feb 9th at 5:00pm',
        reminder: false,
    }    
])

// Add Task
 const addTask = (task) => {
   console.log(task)
 }

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
     
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to Complete.'}
      
    </div>
  )
}


export default App
