import React from 'react';
import './Order.css';
const Order = ({ order }) => {
    const { book, img, author } = order;
    return (
        <div className="order-collection">
            <div>
                <h4>{book}</h4>
                <p>{ }</p>
            </div>
        </div>
    );
};

export default Order;