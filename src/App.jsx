import Navbar from "./components/Navbar"
import Search from "./components/Search"
import BookList from "./components/BookList"
import AddBookForm from "./components/AddBookForm"

import UpdateBookForm from "./components/UpdateBookForm"
const App = () => {
  return (
    <div>

      <Navbar />
      <Search />
      <BookList />
      <AddBookForm />
    </div>
  )
}

export default App