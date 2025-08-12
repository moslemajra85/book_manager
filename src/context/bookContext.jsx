import { createContext } from "react";
import data from "../data/books";
import { useState } from "react";



// create context for books
export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {


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

    const searchBook = (query) => {

        setBooks(data.filter((book) => book.name.toLowerCase().includes(query.toLowerCase())));


    }

    return <BooksContext.Provider value={{ books, addBook, deleteBook, updateBook, searchBook }}>
        {children}
    </BooksContext.Provider>



}



