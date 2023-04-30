import React from 'react';
import NoteList from '../components/NoteList';
import { notes } from '../utils/index';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import DetailNotes from "./DetailNotes"

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
        <DetailNotes notes={notes} />
        <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
        </>
    )
}

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
            (note.title && note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        );

        return (
            <div className="note-app">

                <h1>Daftar Catatan</h1>
                <SearchBar keyword={this.state.searchTerm} keywordChange={this.handleSearch} />
                {filteredNotes.length === 0 ? (
                    <p>Tidak ada data catatan</p>
                ) : (
                    <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} />
                )}
            </div>
        );
    }
}

export default HomePageWrapper;