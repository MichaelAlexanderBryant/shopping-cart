import { Link } from "react-router-dom";

function NavBar() {
    
    return (
        <div id="header-nav">
            <h1>Boltzmann's Books</h1>
            <div id="navigation">
                <ul id="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li>Shopping Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;