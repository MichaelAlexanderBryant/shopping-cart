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
        props.setBooksInCart(props.booksInCart + 1);
    }

    return (
        <div>
            <div id="books">
                <div id="book-grid">
                    {books.map(item => (
                        <div className="book-card" key={item.title + item.cover_id}>                       
                            <img className="book-cover" src={"https://covers.openlibrary.org/b/id/" + item.cover_id + "-M.jpg"} alt={item.title} key={item.cover_id}/>
                            <div className="title-author-container">
                                <h2 className="title" key={item.title}>{item.title}</h2>
                                <h2 className="author" key={item.authors[0].name}>{"by " + item.authors[0].name}</h2>
                            </div>
                            <div className="price" key={item.cover_id + " price"}>{"$" + Math.round(item.cover_id*0.001)/100}</div>
                            <div className="button-container" key={item.title + " add-to-cart container"}>
                                <button className="add-to-cart" key={item.title + " add-to-cart"} onClick={addToCart}>ADD TO CART</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ShopPage;