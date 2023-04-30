import React from 'react';
import PropTypes from 'prop-types';
 
function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-notes">
      <input
      className="search-input"
      type="text"
      placeholder="Cari berdasarkan nama"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} />
    </div>
    
  )
}
 
SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}
 
export default SearchBar;