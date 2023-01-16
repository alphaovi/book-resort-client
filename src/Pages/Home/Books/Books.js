import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import "./Books.css";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [pageCount, setPageCount] = useState(0);


    useEffect(() => {
        fetch("https://booksaw-server.vercel.app/book")
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, []);

    useEffect(() => {
        const url = `https://booksaw-server.vercel.app/bookcount`;
        fetch(url)
            .then((res => res.json))
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setPageCount(pages);
            })
    }, [])
    return (
        <div id="featured-books">
            <p className="quality-item-text">SOME QUALITY BOOKS</p>
            <h1 className="books-heading">Featured Books</h1>
            <div className="books-list">
                {
                    books.map(book => <Book
                        key={book._id}
                        book={book}
                    ></Book>)
                }
            </div>
            {/* <div>
                {
                    [...Array(pageCount).keys()].map(number => <button>{number}</button>)
                }
            </div> */}
        </div>
    );
};

export default Books;