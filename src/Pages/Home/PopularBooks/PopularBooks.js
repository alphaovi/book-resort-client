import React, { useEffect, useState } from 'react';
import PopularBook from '../../Home/PopularBook/PopularBook';
import "./PopularBooks.css";

const PopularBooks = () => {
    const [popularBooks, setPopularBooks] = useState([]);
    useEffect(() => {
        fetch("popularBooks.json")
            .then(res => res.json())
            .then(data => {
                setPopularBooks(data)
            })
    }, [])
    return (
        <div>
            <div id="popular-books">
                <p className="quality-item-text">SOME QUALITY ITEMS</p>
                <h3 className="books-heading">Popular Books</h3>
            </div>
            <div  className="books-list">
                {
                    popularBooks.map(popularBook => <PopularBook
                        key={popularBook.id}
                        popularBook={popularBook}
                    ></PopularBook>)
                }
            </div>
        </div>
    );
};

export default PopularBooks;