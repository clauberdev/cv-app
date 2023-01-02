
import React, { Component } from 'react';

// A section to add general information like name, email, phone number.
class General extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', mail: '', phone: '' }

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
                <h2>General information</h2>
                <ul>
                    <li>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" value={this.state.value} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label for="mail">E-mail:</label>
                        <input type="email" id="mail" name="email" value={this.state.value} onChange={this.handleChange} />
                    </li>
                    <li>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" value={this.state.value} onChange={this.handleChange} />
                    </li>

                </ul>
            </form>
        )
    }
}

export default General