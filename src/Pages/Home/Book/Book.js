import React from 'react';
import { Link } from 'react-router-dom';
import "./Book.css";
const Book = ({book}) => {
    const {name, author, img, price} = book;
    return (
        <div className="book-container">
            <img src={img} alt="" />
            <h2 className="book-name">{name}</h2>
            <p><small>{author}</small></p>
            <h3 className="price">$ {price}</h3>
            <Link to="/orders"><button className="btn btn-secondary">Add Cart: {name}</button></Link>
        </div>
    );
};

export default Book;