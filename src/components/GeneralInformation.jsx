
import React, { Component } from 'react';
import Overview from './Overview';

export default class GeneralInformation extends Component {
    constructor() {
        super();

        this.state = {
            contact: {
                name: '',
                email: '',
                phone: ''
            },
            contacts: []
        };
    }


    handleChange = (e) => {
        const target = e.target;
        const value = target.value
        const name = target.name
        this.setState({
            contact: { [name]: value}
        });
    };

    onSubmitContact = (e) => {
        e.preventDefault();
        this.setState({
            contacts: this.state.contacts.concat(this.state.contact),
            contact: { name: '', email: '', phone: '' },
        });
    };

    render() {
        { console.log(this.state.contact) }
        const { contact, contacts } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitContact}>

                    <label htmlFor="name">Name: </label>
                    <input name="name" onChange={this.handleChange} value={contact.name} type="text" id="name" />

                    <label htmlFor="email">Email: </label>
                    <input name="email" onChange={this.handleChangeEmail} value={contact.email} type="text" id="email" />

                    <label htmlFor="number">Phone number: </label>
                    <input name="number" onChange={this.handleChangeNumber} value={contact.number} type="text" id="number" />
                    <button type="submit">
                        Submit
                    </button>
                </form>

                <Overview contacts={contacts} />
            </div>
        )
    }
}