
import React, { Component } from 'react';

// A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
// 



class Practical extends Component {
    constructor(props) {
        super(props);
        this.state = { companyName: '', positionTitle: '', mainTasks: '', dateWorked: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target)
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
        console.log(name, value)
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Practical experience</h2>
                <ul>
                    <li>
                        <label for="company_name">company name:</label>
                        <input type="text" id="company_name" name="company_name" value={this.state.value} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label for="position_title">Position title:</label>
                        <input type="text" id="position_title" name="position_title" value={this.state.value} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label for="main_tasks">main tasks:</label>
                        <textarea id="main_tasks" name="main_tasks" value={this.state.value} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label for="date_worked">Date work:</label>
                        <input type="date" id="date_worked" name="data_worked" value={this.state.value} onChange={this.handleChange} />
                    </li>


                </ul>
            </form>
        )
    }
}

export default Practical