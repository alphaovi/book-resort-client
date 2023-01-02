import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe-page">
            <div  className="Subscribe-container">
                <div className="Subscribe-title">
                    <h1>Subscribe To <br /> Our Newsletter</h1>
                    <p className="line-1"></p>
                </div>
                <div className="subscripe-letter">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, qui odio sit libero saepe obcaecati cum eos veritatis dolore itaque atque sequi esse dolor hic a! Veritatis voluptate ratione aspernatur!</p>
                    <form>
                        <input type="email" name="email" id="" placeholder="Enter your email address"/>
                        <button className="subscribe-mail">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;