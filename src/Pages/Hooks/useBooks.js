import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("https://booksaw.vercel.app/book")
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    return { books, setBooks }
}

export default useBooks;