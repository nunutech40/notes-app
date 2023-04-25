// SearchNotes.js
import React from 'react';

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({ searchTerm: event.target.value }, () => {
      this.props.onSearch(this.state.searchTerm);
    });
  }

  render() {
    return (
      <div className="search-notes">
        <form>
          <input
            type="text"
            className="search-input"
            placeholder="Cari catatan..."
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchNotes;
