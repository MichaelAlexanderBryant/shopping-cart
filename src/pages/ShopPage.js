import { useState, useEffect } from "react";

function ShopPage() {

    useEffect(() => {
        fetchBooks();
    }, []);

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const data = await fetch('http://openlibrary.org/subjects/statistical_mechanics.json?published_in=1950-1990');

        const jsonData = await data.json();
        setBooks(jsonData["works"]);
        // console.log(allBooks["works"])

    }

    return (
        <div>
            <div id="book-grid">
                {books.map(item => (
                    <div className="book-card" key={item.title + item.cover_id}>
                        <h2 className="title" key={item.title}>{item.title}</h2>
                        <h3 className="author" key={item.authors[0].name}>{item.authors[0].name}</h3>
                        <img className="book-cover" src={"https://covers.openlibrary.org/b/id/" + item.cover_id + "-M.jpg"} alt={item.title} key={item.cover_id}/>
                        <div key={item.cover_id + " price"}>{"$" + Math.round(item.cover_id*.00001*100)/100}</div>
                        <div className="button-container" key={item.title + " add-to-cart container"}>
                            <button className="add-to-cart" key={item.title + " add-to-cart"}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ShopPage;