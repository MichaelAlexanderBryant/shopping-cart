function ShoppingCart(props) {

    let counts = {};
    for (let i = 0; i < props.booksInCart.length; i++) {
        if (Object.keys(counts).includes(props.booksInCart[i])) {
            counts[props.booksInCart[i]] += 1;
        } else {
            counts[props.booksInCart[i]] = 1;
        };
    };

    return ( 
        <div id="shopping-cart-container">
            <button>Checkout</button>
            {Object.keys(counts).map((item) =>
                <div className="book-cart">
                    <img className="book-cover" src={"https://covers.openlibrary.org/b/id/" + item.split(" ").slice(-1) + "-M.jpg"} alt={item.title} key={item.cover_id + "666"}/>
                    <div key={item}>{item}</div>
                    <label htmlFor="quantity">Quantity In Cart</label>
                    <input type={"number"} id={item.cover_id} className="quantity" min={"1"} defaultValue={counts[item]}></input>
                </div>
                )}
        </div>)

}

export default ShoppingCart;