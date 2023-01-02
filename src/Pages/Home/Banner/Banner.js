import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"

const book1 = {
    id: 2516,
    name: "Great Travel At Desert",
    author: "Sancliet Howdy",
    previousPrice: 200,
    price: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam perspiciatis cumque, soluta ipsum et exercitationem repudiandae? Architecto hic, neque possimus facilis fuga fugiat eum ullam sint cum amet libero doloremque!",
    img: "https://i.ibb.co/dMnL4Tk/product-item2.jpg"
};

const book2 = {
    id: 147,
    name: "Fashion System",
    author: "Kevin Spear",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam perspiciatis cumque, soluta ipsum et exercitationem repudiandae? Architecto hic, neque possimus facilis fuga fugiat eum ullam sint cum amet libero doloremque!",
    img: "https://i.ibb.co/5jR87s3/product-item7.jpg"
};

const book3 = {
    id: 158,
    name: "Musical",
    author: "Karim Achard",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam perspiciatis cumque, soluta ipsum et exercitationem repudiandae? Architecto hic, neque possimus facilis fuga fugiat eum ullam sint cum amet libero doloremque!",
    img: "https://i.ibb.co/48J55Cw/product-item8.jpg"
}
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className="banner" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={book1.img}
                    alt="First slide"

                />
                <Carousel.Caption>
                    <h3>{book1.name}</h3>
                    <p className="text-danger">
                        {book1.description}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={book2.img}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>{book2.name}</h3>
                    <p className="text-danger">
                        {book2.description}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={book3.img}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{book3.name}</h3>
                    <p className="text-warning">
                        {book3.description}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;