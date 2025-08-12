import Book from './Book'
import { BooksContext } from '../context/bookContext'
import { useContext } from 'react'

const BookList = () => {

  const { books } = useContext(BooksContext)


  return (
    <div className="booklist-container">
      {
        books.map(book => (

          <Book key={book.id} book={book} />

        ))
      }
    </div>
  )
}

export default BookList