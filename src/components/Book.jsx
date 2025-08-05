import React from 'react'
import { FaTimes } from 'react-icons/fa'


const Book = ({ book }) => {
    return (
        <div className="book-card" key={book.name}>
            <FaTimes className="book-card-remove" title="Remove" />
            <img src={book.imageUrl} alt={book.name} className="book-card-img" />
            <h2 className="book-card-title">{book.name}</h2>
            <button className="book-card-btn">Update</button>
        </div>
    )
}

export default Book