import { useState, useEffect } from "react";

function ShopPage() {

    useEffect(() => {
        fetchBooks();
    }, []);

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const data = await fetch('http://openlibrary.org/subjects/physics.json?published_in=2010-2023');

        const jsonData = await data.json();
        setBooks(jsonData["works"]);
        // console.log(allBooks["works"])

    }

    return (
        <div>
            {books.map(item => (
                <div key={item.title + item.cover_id}>
                    <h1 key={item.title}>{item.title}</h1>
                    <h2 key={item.authors[0].name}>{item.authors[0].name}</h2>
                    <img src={"https://covers.openlibrary.org/b/id/" + item.cover_id + "-M.jpg"} alt={item.title} key={item.cover_id}/>
                </div>
            ))}
        </div>
    )
};

export default ShopPage;