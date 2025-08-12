import { useState } from 'react'
import { useContext } from 'react'
import { BooksContext } from '../context/bookContext'

const UpdateBookForm = ({ book, hideUpdateForm }) => {

  const { updateBook } = useContext(BooksContext)
  const [title, setTitlte] = useState(book.name)


  return (
    <div className="updatebook-form-container">
      <label htmlFor="update-title" className="updatebook-form-label">Title:</label>
      <input onChange={(e) => setTitlte(e.target.value)} value={title} type="text" id="update-title" name="update-title" className="updatebook-form-input" />
      <button className="updatebook-form-btn"


        onClick={() => {

          updateBook(book.id, title)
          hideUpdateForm()
        }}>Save</button>
    </div>
  )
}

export default UpdateBookForm