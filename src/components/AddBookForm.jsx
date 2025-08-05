import React from 'react'

const AddBookForm = () => {
  return (
    <div className="addbook-form-container">
      <label htmlFor="title" className="addbook-form-label">Title:</label>
      <input type="text" id="title" name="title" className="addbook-form-input" />
      <button className="addbook-form-btn">Add Book</button>
    </div>
  )
}

export default AddBookForm