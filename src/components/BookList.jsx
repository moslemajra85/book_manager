import React, { useState } from 'react'
import Book from './Book'


const BookList = ({ books }) => {


  return (
    <div className="booklist-container">
      {
        books.map(book => (

          <Book book={book} />

        ))
      }
    </div>
  )
}

export default BookList