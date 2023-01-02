import React from 'react';
import "./Quote.css"

const Quote = () => {
    return (
        <div className="quote-container">
            <div>
                <h1 className="quote-title">Quote Of The Day</h1>
                <p className="line-1"></p>
                <div className="main-quote">
                    <p className="the-quote">““The more that you read, the more things you will know. The more that you learn, the more places you’ll go.””</p>
                    <p className="the-quote">Dr. Seuss</p>
                </div>
            </div>
        </div>
    );
};

export default Quote;