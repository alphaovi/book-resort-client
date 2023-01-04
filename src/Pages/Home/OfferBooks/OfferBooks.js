import React from 'react';
import useBooksList from '../../Hooks/useBooksList/UseBooksList';
import OfferBook from '../OfferBook/OfferBook';

const OfferBooks = () => {
    const { books, setBooks } = useBooksList();
    return (
        <div>
            <div id="offer-books">
                <p className="quality-item-text">GRAB YOUR OPPORTUNITY</p>
                <h2 className="books-heading">Books With Offer</h2>
            </div>
            <div className="books-list">
                {
                    books.map(book => <OfferBook
                        key={book.id}
                        offerBook={book}
                    ></OfferBook>)
                }
            </div>
        </div>
    );
};

export default OfferBooks;