import { useState } from "react"

const AddBookForm = () => {

  const [bookTitle, setBookTitle] = useState('')


  const handleInputChange = (event) => {
    setBookTitle(event.target.value);

  }
  return (
    <div className="addbook-form-container">
      <label htmlFor="title" className="addbook-form-label">Title:</label>
      <input  value={bookTitle} onChange={handleInputChange} type="text" id="title" name="title" className="addbook-form-input" />
      <button className="addbook-form-btn">Add Book</button>
    </div>
  )
}

export default AddBookForm