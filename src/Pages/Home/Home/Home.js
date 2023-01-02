import React from 'react';
import Banner from '../Banner/Banner';
import BestSellingBook from '../BestSellingBook/BestSellingBook';
import Books from '../Books/Books';
import OfferBooks from '../OfferBooks/OfferBooks';
import PopularBooks from '../PopularBooks/PopularBooks';
import Quote from '../Quote/Quote';
import Subscribe from '../Subscribe/Subscribe';
import "./Home.css";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
            <BestSellingBook></BestSellingBook>
            <PopularBooks></PopularBooks>
            <Quote></Quote>
            <OfferBooks></OfferBooks>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;