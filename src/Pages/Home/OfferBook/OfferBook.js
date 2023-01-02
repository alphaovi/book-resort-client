import React from 'react';
import "./OfferBook.css"
const OfferBook = ({offerBook}) => {
    const {name, price, img, author, previousPrice} = offerBook;
    return (
        <div className="book-container">
            <img src={img} alt="" />
            <h2 className="book-name">{name}</h2>
            <p><small>{author}</small></p>
            <p className="price"> <span id="previous-price">${previousPrice} </span> ${price} </p>
            <button className="btn btn-secondary">Add Cart: {name}</button>
        </div>
    );
};

export default OfferBook;