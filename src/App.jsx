import Navbar from "./components/Navbar"
import Search from "./components/Search"
import BookList from "./components/BookList"
import AddBookForm from "./components/AddBookForm"
import UpdateBookForm from "./components/UpdateBookForm"
import { useState } from "react"

const data = [
  {
    id: 1,
    name: "The Great Gatsby",
    imageUrl: "https://picsum.photos/200/200?random=10"
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    imageUrl: "https://picsum.photos/200/200?random=2"
  },
  {
    id: 3,
    name: "1984",
    imageUrl: "https://picsum.photos/200/200?random=3"
  },
  {
    id: 4,
    name: "Pride and Prejudice",
    imageUrl: "https://picsum.photos/200/200?random=4"
  },
  {
    id: 5,
    name: "Moby Dick",
    imageUrl: "https://picsum.photos/200/200?random=5"
  },
  {
    id: 6,
    name: "War and Peace",
    imageUrl: "https://picsum.photos/200/200?random=6"
  }
]
const App = () => {

  const [books, setBooks] = useState(data)


  const addBook = (book) => {

    setBooks([...books, book])

  }



  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }


  const updateBook = (id, title) => {

    // Find the index of the book with the matching ID
    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {

      setBooks(books.map((book) => book.id === id ? { ...book, name: title } : book))

    }


  }


  return (
    <div>
      <Navbar />
      <Search />
      <BookList deleteBook={deleteBook} books={books} updateBook={updateBook} />
      <AddBookForm addBook={addBook} updateBook={updateBook} />
    </div>
  )
}

export default App