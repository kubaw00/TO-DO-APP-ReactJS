import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {
    
    minDate = new Date().toISOString().slice(0,10)
    state = { 
        text: '',
        checked: false,
        date: this.minDate,
     }

     handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    handleChecked = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }

     handleChangeDate = (e) => {
         this.setState({
             date: e.target.value,
         })
     }

     handleClick = () => {
        
        const {text, date, checked} = this.state;
        
        if (text.length > 3 ) {
            const add = this.props.addTask(text, date, checked);
            if (add) {
                 this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate,
            })
        }
        } else {
            alert('Zbyt krótka nazwa')
        }
     }
    
    render() {
        
        let maxDate = +this.minDate.slice(0,4) + 1;
        maxDate = maxDate + "-12-31";
        
        return (
            <div className="form">
                <input type="text" onChange={this.handleText} placeholder="dodaj zadanie" value={this.state.text} />
                <input onChange={this.handleChecked} type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priorytet</label>
            
                <label htmlFor="date">Do kiedy zrobić: 
                <input type="date" min={this.minDate} max={maxDate} value={this.state.date} onChange={this.handleChangeDate}/>
                </label>
                <button onClick={this.handleClick}>Dodaj</button>

            </div>
          );
    }
}
 
export default AddTask;