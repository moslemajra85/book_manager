import { useContext, useState } from "react"
import { BooksContext } from "../context/bookContext"
const Search = () => {

  const [searchText, setSearchText] = useState("")
  const { searchBook } = useContext(BooksContext);
  return (
    <div className="search-container">
      <label htmlFor="search-book" className="search-label">Search Book</label>
      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
          searchBook(e.target.value)

        }}
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