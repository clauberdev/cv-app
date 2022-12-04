
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


    handleChangeName = (e) => {
        this.setState({
            contact: {
                name: e.target.value
            }
        });
    };

    handleChangeEmail = (e) => {
        this.setState({
            contact: {
                email: e.target.value
            }
        });
    };

    handleChangeNumber = (e) => {
        this.setState({
            contact: {
                number: e.target.value
            }
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
                    <input onChange={this.handleChangeName} value={contact.name} type="text" id="name" />

                    <label htmlFor="email">Email: </label>
                    <input onChange={this.handleChangeEmail} value={contact.email} type="text" id="email" />

                    <label htmlFor="number">Phone number: </label>
                    <input onChange={this.handleChangeNumber} value={contact.number} type="text" id="number" />
                    <button type="submit">
                        Submit
                    </button>
                </form>

                <Overview contacts={contacts} />
            </div>
        )
    }
}