import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Order from './Order/Order';

const Orders = () => {
    const [user] = useAuthState(auth);

    const [orders, setOrders] = useState([]);

    useEffect(() => {

       const getOrders = async () => {
        const email = user.email;
        const url =`http://localhost:5002/order?email=${email}`;
        const {data} = await axios.get(url);
        setOrders(data)
       }
       getOrders()
    } , [user])
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
            {
                orders.map(order => <Order 
                    key={order._id}
                    order={order}
                ></Order>)
                
            }
        </div>
    );
};

export default Orders;