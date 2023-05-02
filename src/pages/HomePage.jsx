import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes, getArchivedNotes, deleteNote } from '../utils/api';
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
            activeNotes: [],
            archivedNotes: [],
            searchTerm: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    async componentDidMount() {
        const { data: notesActive } = await getActiveNotes();
        const { data: noteArchive } = await getArchivedNotes();
    
        this.setState(() => {
            return {
                activeNotes: notesActive,
                archivedNotes: noteArchive
            }
        });
    }

    async onDeleteHandler(id) {
        // Call the deleteNote function from your API utility
        const { error } = await deleteNote(id);

        if (!error) {
            const activeNotes = this.state.activeNotes.filter(note => note.id !== id);
            const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
            this.setState({ activeNotes, archivedNotes });
        }
    }

    // Method untuk mengubah nilai searchTerm pada state
    // dan memanggil fungsi keywordChange yang diterima melalui props
    handleSearch(searchTerm) {
        this.setState({ searchTerm });

        this.props.keywordChange(searchTerm);
    }

    render() {
        const filteredNotes = this.state.activeNotes.filter(note =>
            note.title &&
            note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );

        const filteredNotesArchived = this.state.archivedNotes.filter(note =>
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