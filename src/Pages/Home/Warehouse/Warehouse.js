import React from 'react';
import { Table } from 'react-bootstrap';
import useBooks from '../../Hooks/useBooks';
import "./Warehouse.css"


const Warehouse = () => {
    const { books, setBooks } = useBooks();
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `http://localhost:5002/book/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remaining = books.filter(book => book._id !== id);
                setBooks(remaining);
            });
        }
    }
    return (
        <div>
            <h3>This is warehosue component</h3>
            {
                books.map(book => <div key={book._id}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr className="w-50">
                                <th>Books Name</th>
                                <th>Author</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{book.name}</td>
                                <td>{book.author}}</td>
                                <td>{book.price}</td>
                                <td><button onClick={() => handleDelete(book._id)}>X</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    );
};

export default Warehouse;