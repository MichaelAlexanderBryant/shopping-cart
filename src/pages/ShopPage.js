import { useState, useEffect } from "react";

function ShopPage() {

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

    return (
        <div id="books">
            <div id="book-grid">
                {books.map(item => (
                    <div className="book-card" key={item.title + item.cover_id}>                       
                        <img className="book-cover" src={"https://covers.openlibrary.org/b/id/" + item.cover_id + "-M.jpg"} alt={item.title} key={item.cover_id}/>
                        <div className="title-author-container">
                            <h2 className="title" key={item.title}>{item.title}</h2>
                            <h2 className="author" key={item.authors[0].name}>{"by " + item.authors[0].name}</h2>
                        </div>
                        <div className="price" key={item.cover_id + " price"}>{"$" + Math.round(Math.random()*10000)/100}</div>
                        <div className="button-container" key={item.title + " add-to-cart container"}>
                            <button className="add-to-cart" key={item.title + " add-to-cart"}>ADD TO CART</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ShopPage;