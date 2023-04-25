import React from 'react';
import NoteList from './NoteList';
import { getData } from './utils/notesdata';
import NotesInput from './NotesInput'

class NotesApp extends React.Component {
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
                <NotesInput addContact={this.onAddContactHandler} />
                <h1>Daftar Catatan</h1>
                <NoteList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default NotesApp;