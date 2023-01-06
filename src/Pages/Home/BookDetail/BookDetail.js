import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import "./BookDetail.css";


const BookDetail = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        const url = `http://localhost:5002/book/${bookId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])
    const navigate = useNavigate();

    const navigateToConfirmBuy = () => {
        navigate("/confirm")
    }
    return (
        <div>
            <h3></h3>

            <Card>
                <Card.Header>You order: {book.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{book.author}</Card.Title>
                    <Card.Text>
                        <img src={book.img} alt="" />
                    </Card.Text>
                    <Button onClick={navigateToConfirmBuy} variant="primary">Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookDetail;