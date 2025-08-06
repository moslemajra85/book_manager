import React, { useState } from 'react'
import Book from './Book'


const BookList = ({ books , deleteBook}) => {


  return (
    <div className="booklist-container">
      {
        books.map(book => (

          <Book deleteBook={deleteBook} key={book.id} book={book} />

        ))
      }
    </div>
  )
}

export default BookList