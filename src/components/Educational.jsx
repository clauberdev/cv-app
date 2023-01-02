
import React, { Component } from 'react';

class Educational extends Component {
    constructor(props) {
        super(props);
        this.state = { schoolName: '', titleOfStudy: '', dateOfStudy: "2018-07-22" }

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
                <h2>Educational experience</h2>
                <ul>
                    <li>
                        <label for="school_name">School name:</label>
                        <input type="text" id="school_name" name="school_name" value={this.state.value} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label for="title_of_study">Title of study:</label>
                        <input type="text" id="title_of_study" name="title_of_study" value={this.state.value} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label for="date_of_study">Date of study:</label>
                        <input type="date" id="phone" name="date_of_study"
                            min="2018-01-01" max="2018-12-31" value={this.state.value} onChange={this.handleChange} />
                    </li>

                </ul>
            </form>
        )
    }
}

export default Educational