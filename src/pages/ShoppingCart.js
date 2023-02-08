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
            { props.booksInCart.length > 0 ? <button id="checkout-button">Checkout</button> : <div id="no-items">There's nothing in your cart!</div> }
            {Object.keys(counts).map((item) =>
                <div className="book-cart">
                    <img className="book-cover cart-cover" src={"https://covers.openlibrary.org/b/id/" + item.split(" ").slice(-1) + "-M.jpg"} alt={item.title} key={item.cover_id + "666"}/>
                    <div className="cart-title" key={item}>{item.split(" ").slice(0,-1).join(" ")}</div>
                    <div className="cart-quantity">
                        <div className="cart-quantity-container">
                            <label htmlFor="quantity">Quantity</label>
                            <input type={"number"} id={item.cover_id} className="quantity cart-quantity-input" min={"1"} defaultValue={counts[item]}></input>
                        </div>
                    </div>
                </div>
                )}
        </div>)

}

export default ShoppingCart;