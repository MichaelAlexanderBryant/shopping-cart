import { Link } from "react-router-dom";

function NavBar(props) {
    
    return (
        <div id="header-nav">
            <h1>Boltzmann's <span className="yellow-title">Books</span></h1>
            <div id="navigation">
                <ul id="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li id="shopping-cart">Shopping Cart <div id="number-cart">{props.booksInCart === undefined ? 0 : props.booksInCart}</div></li>
                </ul>
                
            </div>
        </div>
    )
}

export default NavBar;