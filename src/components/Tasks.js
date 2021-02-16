//array of tasks
// const tasks = [
//     {
//         id: 1,
//         text: 'Food shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     },
//     {
//         id: 2,
//         text: 'Homework',
//         day: 'Feb 9th at 5:00pm',
//         reminder: false,
//     }    
// ]

import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
        </>
    )
}

export default Tasks
