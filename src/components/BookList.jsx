import React, { useState } from 'react'
import Book from './Book'


const BookList = ({ books, deleteBook, updateBook }) => {


  return (
    <div className="booklist-container">
      {
        books.map(book => (

          <Book updateBook={updateBook} deleteBook={deleteBook} key={book.id} book={book} />

        ))
      }
    </div>
  )
}

export default BookList