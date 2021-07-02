import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    
    const active = props.tasks.filter((task)=> task.active)
    const done = props.tasks.filter((task)=> !task.active)
    
    if (done.length > 1){
    done.sort((a,b) => b.finishDate - a.finishDate);
    }
    
    if(active.length > 1) {
    active.sort((a,b) => {
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();
        if(a < b) return -1
        if(a > b) return 1
        return 0
    })
    }

    const activeTasks = active.map((task)=> <Task delete={props.delete} change={props.change} key={task.id} task={task} />)
    const doneTasks = done.map((task)=> <Task delete={props.delete} change={props.change} key={task.id} task={task} />)
    
    return (
        <> 
        <div className="active">
            <h1>Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : <p>Wszystkie zadania zrobione</p>}
        </div>
        <hr />
        <div className="done">
            <h3>Zadania wykonane <em>({done.length})</em></h3>
            {doneTasks}
        </div>
        </>
     );
}
 
export default TaskList;