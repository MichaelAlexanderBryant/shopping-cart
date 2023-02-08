import { Link } from "react-router-dom";

function NavBar(props) {
    
    return (
        <div id="header-nav">
            <h1>Boltzmann's <span className="yellow-title">Books</span></h1>
            <div id="navigation">
                <ul id="nav-list">
                    <li><Link to="/"><span className="underline">Home</span></Link></li>
                    <li><Link to="/books"><span className="underline">Books</span></Link></li>
                    <li id="shopping-cart">
                        <Link to="/cart"><span className="underline">Shopping Cart</span></Link>
                            <div id="number-cart">{props.booksInCart === undefined ? 0 : props.booksInCart}</div>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default NavBar;