import React from 'react';
import {useNavigate } from 'react-router-dom';
import "./Book.css";
const Book = ({ book }) => {
    const {_id, name, author, img, price } = book;
    const navigate = useNavigate();

    const navigateToBookDetail = (id) => {
        navigate(`/book/${id}`)
    }
    return (
        <div className="book-container">
            <img src={img} alt="" />
            <h2 className="book-name">{name}</h2>
            <p><small>{author}</small></p>
            <h3 className="price">$ {price}</h3>
            <button onClick={() => navigateToBookDetail(_id)} className="btn btn-secondary">Buy Now</button>
        </div>
    );
};

export default Book;