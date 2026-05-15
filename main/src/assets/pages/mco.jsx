import { Link } from "react-router-dom";
import "./mco.css";

const MCO = () => {
  return (
    <main className="home-home">
      <header className="home-head">
        <h1 className="h1">BSIT-2A Group 8 Activities</h1>
      </header>

      <section className="home-members">
        <h2 className="home-h2">BSIT-2A Group 8 Members</h2>
        <p className="home-p">This group strives for continuous growth and development.</p>
        <hr />

        <ul className="home-list">
          <li className="home-li"> Ablania , Iann Andrie F.</li>
          <li className="home-li"> Bato, Dianna Marie B.</li>
          <li className="home-li"> Casaljay, John Mhyckel D.</li>
          <li className="home-li"> Villanueva, Russel Athan R.</li>
        </ul>
      </section>

      <section className="home-grid">
        <Link to="/pokemon2" className="home-card">
          <h2 className="home-h2">Activity 4</h2>
          <p className="home-p">Pokédex list</p>
          <span className="home-view">View →</span>
        </Link>

        <Link to="/pokemon" className="home-card">
          <h2 className="home-h2">Activity 3</h2>
          <p className="home-p">legendary Pokemon list</p>
          <span className="home-view">View →</span>
        </Link>

        <Link to="/Activity" className="home-card">
          <h2 className="home-h2">Activity 2</h2>
          <p className="home-p">Input validation practice</p>
          <span className="home-view">View →</span>
        </Link>

        <Link to="/Form" className="home-card">
          <h2 className="home-h2">Demo FormRegistration</h2>
          <p className="home-p">User registration</p>
          <span className="home-view">View →</span>
        </Link>

        <Link to="/Activity2" className="home-card">
          <h2 className="home-h2">Amen</h2>
          <p className="home-p">Pag may buhay may, pag asa</p>
          <span className="home-view">View →</span>
        </Link>

        <Link to="/Count" className="home-card">
          <h2 className="home-h2">Counter</h2>
          <p className="home-p">React state counter demo</p>
          <span className="home-view">View →</span>
        </Link>
      </section>

    </main>
  );
};

export default MCO;