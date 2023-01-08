import { useEffect, useState } from "react"

const useBookDetail = (bookId) => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/book/${bookId}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [bookId])
    return {bookDetail: book, setBookDetail: setBook}
}

export default useBookDetail;