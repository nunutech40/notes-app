import React from 'react';

class NotesInput extends React.Component {

    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            remainingChars: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    resetForm() {
        this.setState({
            title: '',
            body: '',
            remainingChars: 50,
        });
    }

    onTitleChangeEventHandler(event) {
        const inputLength = event.target.value.length;
        if (inputLength <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value,
                    remainingChars: 50 - inputLength,
                };
            });
        }
    }

    onNoteChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNoteList(this.state);
        this.resetForm();
    }


    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input
                    type="text"
                    placeholder="Judul"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <p>{this.state.remainingChars}</p>
                <textarea
                    className="note-textarea"
                    placeholder="Catatan"
                    value={this.state.body}
                    onChange={this.onNoteChangeEventHandler}
                    rows={4}
                    cols={50}
                    style={{ resize: 'vertical' }}
                />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default NotesInput;