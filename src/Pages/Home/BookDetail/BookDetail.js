import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useBookDetail from '../../Hooks/useBookDetail';
import "./BookDetail.css";


const BookDetail = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState({});
    const {book} = useBookDetail(bookId);


    useEffect(() => {
        const url = `https://booksaw-server.vercel.app/book/${bookId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [bookId]);

    const navigate = useNavigate();

    const navigateToConfirmBuy = () => {
        navigate(`/confirm/${bookId}`)
    }
    return (
        <div className="books-detail-container">
           
            <Card>
                <Card.Header>You Choose: {books.name}</Card.Header>
                <Card.Body>
                    <Card.Title>By: {books.author}</Card.Title>
                    <Card.Text>
                        <img src={books.img} alt="" />
                    </Card.Text>
                    <p className="book-description">{books.description}</p>
                    <Button onClick={() =>navigateToConfirmBuy(bookId)} variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookDetail;