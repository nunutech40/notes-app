import React from 'react';
import NoteList from '../components/NoteList';
import { notes } from '../utils/index';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomePageWrapper() {
    // Menggunakan hook useSearchParams untuk mengakses dan mengubah parameter pencarian pada URL
    const [searchParams, setSearchParams] = useSearchParams();

    // Mengambil nilai 'keyword' dari parameter pencarian
    const keyword = searchParams.get('keyword');

    // Fungsi untuk mengubah parameter pencarian 'keyword' pada URL
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return (
        <>
            <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
        </>
    )
}

HomePageWrapper.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: notes,
            searchTerm: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    // Method untuk mengubah nilai searchTerm pada state
    // dan memanggil fungsi keywordChange yang diterima melalui props
    handleSearch(searchTerm) {
        this.setState({ searchTerm });

        this.props.keywordChange(searchTerm);
    }

    render() {
        const filteredNotes = this.state.notes.filter(note =>
            note.archived === false &&
            note.title &&
            note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );

        const filteredNotesArchived = this.state.notes.filter(note =>
            note.archived === true &&
            (note.title && note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        );

        return (
            <div className="note-app">
                <h1>Daftar Catatan</h1>
                <SearchBar keyword={this.state.searchTerm} keywordChange={this.handleSearch} />

                <h2>Catatan Aktif</h2>
                {filteredNotes.length === 0 ? (
                    <p>Tidak ada data catatan</p>
                ) : (
                    <div>
                        <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} />
                    </div>
                )}

                <h2>Catatan Arsip</h2>
                {filteredNotesArchived.length === 0 ? (
                    <p>Tidak ada data catatan</p>
                ) : (
                    <NoteList notes={filteredNotesArchived} onDelete={this.onDeleteHandler} />
                )}
            </div>
        );

    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};


export default HomePageWrapper;