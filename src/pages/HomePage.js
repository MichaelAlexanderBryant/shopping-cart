import boltzmann from '../assets/boltzmann.jpg';

function HomePage() {

    return (
        <div id="homepage">
            <img src={boltzmann} alt="boltzmann"/>
            <p>Ludwig Boltzmann, who spent much of his life studying statistical mechanics, died in 1906, by his own hand.
                Paul Ehrenfest, carrying on the work, died similarly in 1933. Now it is your turn to study statistical mechanics.
            </p>
        </div>
    )

}

export default HomePage;