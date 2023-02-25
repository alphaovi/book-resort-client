import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import useBookDetail from '../../Hooks/useBookDetail';
import 'react-toastify/dist/ReactToastify.css';



const ConfirmBuy = () => {
    const { bookId } = useParams();
    const { bookDetail: book } = useBookDetail(bookId);
    const [user] = useAuthState(auth);
    console.log(user);

    const navigate = useNavigate()

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            book: book.name,
            bookId: bookId,
            address: event.target.address.value,
            phone: event.target.phone.value
        };

        axios.post("http://localhost:5000/order", order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast("Congrates! You confirmed Your order");
                    event.target.reset();
                }
            })
    }

    const navigateToOrder = () => {
        navigate("/orders")
    }

    return (
        <div>
            <h3>Please Confirm Your Order</h3>
            <div>
                <img src={book.img} alt="" />
                <h3>{book.name}</h3>
                <p><small>By </small>{book.author}</p>
            </div>
            <div className="w-50  mt-2 mx-auto">
                <form onSubmit={handlePlaceOrder}>
                    <input className="w-100 mt-2" type="text" value={user?.displayName} name="name" placeholder="Name" required disabled />
                    <br />
                    <input className="w-100 mt-2" type="email" value={user?.email} name="email" placeholder="Email" required disabled />
                    <br />
                    <input className="w-100 mt-2" type="text" value={book.name} name="book" placeholder="Book Name" disabled />
                    <br />
                    <input className="w-100 mt-2" type="text" value={book.author} name="author" placeholder="Author" disabled />
                    <br />
                    <input className="w-100 mt-2" type="text" name="address" placeholder="Address" />
                    <br />
                    <input className="w-100 mt-2" type="text" name="phone" placeholder="Phone" />
                    <br />
                    <input onClick={navigateToOrder} className="btn btn-primary w-50 mt-2" type="submit" value="Place Order" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ConfirmBuy;