import { Link } from "react-router-dom";

function NavBar(props) {
    
    return (
        <div id="header-nav">
            <h1>Boltzmann's <span className="yellow-title">Books</span></h1>
            <div id="navigation" data-testid="navigation">
                <ul id="nav-list">
                    <li><Link to="/"><span className="underline" data-testid="home">Home</span></Link></li>
                    <li><Link to="/books"><span className="underline" data-testid="books">Books</span></Link></li>
                    <li id="shopping-cart">
                        <Link to="/cart"><span className="underline" data-testid="cart">Shopping Cart</span></Link>
                            <div id="number-cart" data-testid="cart-number">{props.booksInCart === undefined ? 0 : props.booksInCart}</div>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default NavBar;