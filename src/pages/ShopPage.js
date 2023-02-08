import { useState, useEffect } from "react";

function ShopPage(props) {

    useEffect(() => {
        fetchBooks();
    }, []);

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const data = await fetch('http://openlibrary.org/subjects/statistical_mechanics.json?published_in=1980-1990');

        const jsonData = await data.json();
        setBooks(jsonData["works"]);
        // console.log(allBooks["works"])

    }

    const addToCart = (e) => {
        e.preventDefault();
        let quantity = document.getElementById(e.target.id.split(" ").slice(-1)).value
        let addBooks = Array(+quantity).fill(e.target.id);
        props.setBooksInCart(props.booksInCart.concat(addBooks));
    };

    return (
        <div>
            <div id="books">
                <div id="book-grid">
                    {books.map(item => (
                        <div className="book-card" key={item.title + item.cover_id}>                       
                            <img className="book-cover" src={"https://covers.openlibrary.org/b/id/" + item.cover_id + "-M.jpg"} alt={item.title} key={item.cover_id + "666"}/>
                            <div className="title-author-container">
                                <h2 className="title" key={item.title}>{item.title}</h2>
                                <h2 className="author" key={item.authors[0].name}>{"by " + item.authors[0].name}</h2>
                            </div>
                            <div className="price" key={item.cover_id + " price"}>{"$" + Math.round(item.cover_id*0.001)/100}</div>
                            <form className="quantity-form">
                                <label htmlFor="quantity">Quantity</label>
                                <input type={"number"} id={item.cover_id} className="quantity" min={"1"} defaultValue="1"></input>
                                <div className="button-container" key={item.title + " add-to-cart container"}>
                                    <button id={item.title + " by " + item.authors[0].name + " " + item.cover_id} className="add-to-cart" key={item.title + " add-to-cart"} onClick={addToCart}>ADD TO CART</button>
                                </div>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ShopPage;