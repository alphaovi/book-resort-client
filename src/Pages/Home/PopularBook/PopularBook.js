import React from 'react';
import "./PopularBook.css";
const PopularBook = ({popularBook}) => {
    const {name, img, price, author} = popularBook;
    return (
        <div className="book-container">
            <img src={img} alt="" />
            <h3 className="book-name">{name}</h3>
            <p>{author}</p>
            <p  className="price">Price: {price}</p>
            <button className="btn btn-secondary">Add Cart</button>
        </div>
    );
};

export default PopularBook;