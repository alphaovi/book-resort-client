import "./BestSellingBook.css";

const BestSellingBook = () => {
    const bestSellingBook = {
        id: 12,
        bookName: "BIRDS GONNE BE HAPPY",
        author: "Timbur Hood",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi! Aspernatur ut consequuntur quidem author, Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sequi! Aspernatur ut consequuntur quidem aut",
        price: "45.00",
        img: "https://i.ibb.co/Xy7DY0h/single-image.jpg"
    }

    return (
        <section className="bestBook-style">
            <div className="bestBook-image">
                <img src={bestSellingBook.img} alt="" />
            </div>
            <div className="bestBook-details">
                <h1>Best Selling <span> <br /> Book</span></h1>

                <p className="bestBook-fontStyle">By {bestSellingBook.author}</p>
                <h3>{bestSellingBook.bookName}</h3>
                <p className="bestBook-fontStyle">{bestSellingBook.description}</p>
                <p id="bestBook-price" className="price">${bestSellingBook.price}</p>
                <button className="btn btn-danger">Shop It Now</button>
            </div>
        </section>
    );
};

export default BestSellingBook;