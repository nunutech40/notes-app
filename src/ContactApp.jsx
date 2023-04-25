import React from 'react';
import ContactList from './ContactList';
import { getData } from '../src/utils/notesdata';
import ContactInput from './ContactInput'

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
        
    }

    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
    }

    onAddContactHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Notes App</h1>
                <h2>Tuliskan Catatan Hari Ini</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h1>Daftar Catatan</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default ContactApp;