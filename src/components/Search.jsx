import React from 'react'

const Search = () => {
  return (
    <div className="search-container">
      <label htmlFor="search-book" className="search-label">Search Book</label>
      <input
        type="search"
        id="search-book"
        className="search-input"
        placeholder="Type to search..."
        autoComplete="off"
      />
    </div>
  )
}

export default Search