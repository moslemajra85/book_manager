import React, { useState } from 'react'
import Book from './Book'

const data = [
  {
    name: "The Great Gatsby",
    imageUrl: "https://picsum.photos/200/200?random=1"
  },
  {
    name: "To Kill a Mockingbird",
    imageUrl: "https://picsum.photos/200/200?random=2"
  },
  {
    name: "1984",
    imageUrl: "https://picsum.photos/200/200?random=3"
  },
  {
    name: "Pride and Prejudice",
    imageUrl: "https://picsum.photos/200/200?random=4"
  },
  {
    name: "Moby Dick",
    imageUrl: "https://picsum.photos/200/200?random=5"
  },
  {
    name: "War and Peace",
    imageUrl: "https://picsum.photos/200/200?random=6"
  }
]
const BookList = () => {

  const [books, setBooks] = useState(data)

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