import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'

class App extends Component {
  
  
  counter = 7;
  state = { 
    tasks: [
      {
        id: 0,
        text: 'Umyć naczynia',
        date: '2021-08-23',
        important: false,
        active: true,
        finishDate: null,

      },
      {
        id: 1,
        text: 'Posprzątać pokój',
        date: '2021-08-24',
        important: true,
        active: true,
        finishDate: null,

      }, 
      {
        id: 2,
        text: 'Zrobić zakupy',
        date: '2021-08-26',
        important: false,
        active: true,
        finishDate: null,

      },
      {
        id: 3,
        text: 'Odrobić lekcje',
        date: '2021-08-22',
        important: false,
        active: true,
        finishDate: null,

      },
      {
        id: 4,
        text: 'Nauczyć się nowego Frameworka',
        date: '2021-08-27',
        important: false,
        active: true,
        finishDate: null,

      },
      {
        id: 5,
        text: 'Przeczytać książkę',
        date: '2021-08-28',
        important: false,
        active: true,
        finishDate: null,

      },
      {
        id: 6,
        text: 'Zrobić nowy projekt w JavaScripcie',
        date: '2021-08-29',
        important: true,
        active: true,
        finishDate: null,

      }

    ]
   }

   deleteTask = (id) => {
    // inny sposób:
    //  const tasks = [...this.state.tasks];
    //  const index = tasks.findIndex((task) => task.id === id )
    //  tasks.splice(index, 1);

     let tasks = [...this.state.tasks];
     tasks = tasks.filter((task) => task.id !== id);
     
     this.setState({
       tasks
     })
   }

   changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id){
          if(task.active){
         task.active = false;
          }
         task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
   }

   addTask = (text, date, important) => {
       console.log("dodano obiekt")
      const task = {
        id: this.counter,
        text: text,
        date: date,
        important: important,
        active: true,
        finishDate: null,
      }
      this.counter ++;
     
      this.setState(prevState => ({
        
        tasks: [...prevState.tasks, task]
      })
      )

      return true
   }

  render() { 
    return ( 
      <div className="app">
        <h1>To Do App</h1>
        <AddTask addTask={this.addTask}/>
        <TaskList  tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
     );
  }
}
 
export default App;
