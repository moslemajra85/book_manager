import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import UpdateBookForm from './UpdateBookForm'
import { useContext } from 'react'
import { BooksContext } from '../context/bookContext'

const Book = ({ book }) => {

    const { deleteBook } = useContext(BooksContext)

    const [isVisible, setIsVisible] = useState(false)

    const handleDeleteBook = (book) => {
        deleteBook(book.id)
    }

    const hideUpdateForm = () => {
        setIsVisible(false)
    }




    return (
        <div className="book-card" key={book.name}>
            <FaTimes onClick={() => handleDeleteBook(book)} className="book-card-remove" title="Remove" />
            <img src={book.imageUrl} alt={book.name} className="book-card-img" />
            <h2 className="book-card-title">{book.name}</h2>
            {!isVisible ? <button onClick={() => setIsVisible(true)} className="book-card-btn">Update</button> : null}
            {
                isVisible ? <UpdateBookForm  book={book} hideUpdateForm={hideUpdateForm} /> : null
            }
        </div>
    )
}

export default Book