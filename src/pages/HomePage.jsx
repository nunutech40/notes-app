import React from 'react';
import NoteList from '../components/NoteList';
import { notes } from '../utils/index';
import SearchNotes from '../components/SearchNotes';
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
  
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: notes,
            searchTerm: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    handleSearch(searchTerm) {
        this.setState({ searchTerm });
    }

    render() {
        const filteredNotes = this.state.notes.filter(note =>
            (note.title && note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())) ||
            (note.body && note.body.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        );

        return (
            <div className="note-app">
                <h1>Notes App</h1>
                <h1>Daftar Catatan</h1>
                <SearchNotes onSearch={this.handleSearch} />
                {filteredNotes.length === 0 ? (
                    <p>Tidak ada data catatan</p>
                ) : (
                    <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} />
                )}
            </div>
        );
    }
}

export default HomePage;