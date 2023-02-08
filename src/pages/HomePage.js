import { Link } from 'react-router-dom';
import boltzmann from '../assets/boltzmann.jpg';

function HomePage() {

    return (
        <div id="homepage">
            <img src={boltzmann} alt="boltzmann"/>
            <div id="homepage-intro">
                <p>Welcome to Boltzmann's Books!</p>
                <p>A specialty bookstore for statistical mechanics.</p>
                <p>Ludwig Boltzmann, who spent much of his life studying statistical mechanics, died in 1906, by his own hand.
                    Paul Ehrenfest, carrying on the work, died similarly in 1933. Now it is <strong>your</strong> turn to study statistical mechanics.
                </p>
                <Link to="/books"><button className="add-to-cart">Shop Now</button></Link>
            </div>
        </div>
    )

}

export default HomePage;