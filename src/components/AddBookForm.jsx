import { useState } from "react"

const AddBookForm = ({ addBook }) => {

  const [bookTitle, setBookTitle] = useState('')


  const handleInputChange = (event) => {
    setBookTitle(event.target.value);

  }

  const handleAddBook = () => {

    if(!bookTitle) {
      return
    }

    const book = {


      name: bookTitle,
      imageUrl: "https://picsum.photos/200/200?random=7"

    }
    addBook(book)
    setBookTitle('')
  }
  return (
    <div className="addbook-form-container">
      <label htmlFor="title" className="addbook-form-label">Title:</label>

      <input value={bookTitle} onChange={handleInputChange} type="text" id="title" name="title" className="addbook-form-input" />
      <button onClick={handleAddBook} className="addbook-form-btn">Add Book</button>
    </div>
  )
}

export default AddBookForm