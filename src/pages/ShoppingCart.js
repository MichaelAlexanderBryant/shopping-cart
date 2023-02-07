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
        <div>
            {Object.keys(counts).map((item) =>
                <div key={item}>{item + ": " + counts[item]}</div>)}
        </div>)

}

export default ShoppingCart;