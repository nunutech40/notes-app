import React from 'react';

class ContactInput extends React.Component {

    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    resetForm() {
        this.setState({
            title: '',
            body: '',
        });
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
        this.resetForm();
    }


    render() {
        return (
            <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
                <input
                    type="text"
                    placeholder="Judul"
                    value={this.state.title}
                    onChange={this.onNameChangeEventHandler}
                />
                <input
                    type="text"
                    placeholder="Catatan"
                    value={this.state.body}
                    onChange={this.onTagChangeEventHandler}
                />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default ContactInput;