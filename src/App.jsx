import Navbar from "./components/Navbar"
import Search from "./components/Search"
import BookList from "./components/BookList"
import AddBookForm from "./components/AddBookForm"
import UpdateBookForm from "./components/UpdateBookForm"
import { useState } from "react"


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
const App = () => {

  const [books, setBooks] = useState(data)

  return (
    <div>

      <Navbar />
      <Search />
      <BookList  books={books}/>
      <AddBookForm />
    </div>
  )
}

export default App