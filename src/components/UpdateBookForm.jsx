import React from 'react'
import { useState } from 'react'

const UpdateBookForm = ({ updateBook, book, hideUpdateForm }) => {

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