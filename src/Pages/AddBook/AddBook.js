import React from 'react';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = "https://booksaw.vercel.app/book";
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    };

    return (
        <div className="w-50 mt-5 m-auto">
            <h2>Add New Book</h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-5" placeholder='Book Name' {...register("name")} />
                <input className="mb-5" placeholder='Author' {...register("author")} />
                <input className="mb-5" placeholder='Photo Url' {...register("img")} />
                <input className="mb-5" placeholder='price' type="number" {...register("price")} />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
}
export default AddBook;