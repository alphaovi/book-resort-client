import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import "./Books.css";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5002/book")
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    return (
        <div id="featured-books">
            <p className="quality-item-text">SOME QUALITY BOOKS</p>
            <h1 className="books-heading">Featured Books</h1>
            <div className="books-list">
                {
                    books.map(book => <Book
                        key={books.id}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;