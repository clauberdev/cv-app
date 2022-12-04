
import React, { Component } from 'react';
import Overview from './Overview';

export default class GeneralInformation extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: ''
        };
    }


    handleChange = (e) => {
        const target = e.target;
        console.log(target)
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        });

        
    };

    onSubmitContact = (e) => {
        e.preventDefault();
        alert('A name was submitted: ' + this.state.email);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitContact}>

                    <label htmlFor="name">Name: </label>
                    <input name="name" onChange={this.handleChange} value={this.state.name} type="text" id="name" />

                    <label htmlFor="email">Email: </label>
                    <input name="email" onChange={this.handleChange} value={this.state.email} type="text" id="email" />

                    <label htmlFor="number">Phone number: </label>
                    <input name="phone" onChange={this.handleChange} value={this.state.phone} type="text" id="number" />
                    <button type="submit">
                        Submit
                    </button>
                </form>

                
            </div>
        )
    }
}