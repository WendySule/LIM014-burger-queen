import React from "react";
import burger from '../burger_log.svg';
import '../App.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header>
        <section>
          <img src={burger} className="burger-logo" alt="logo-burger-queen" />
        </section>
      </header>
      <article className="App-header">
        <div>
            <h1>bienvenido</h1>
            <p>escoge tu puesto</p>
            <nav className="App-link">
                <Link to="Waiter">mesero
                </Link>
                <Link to="Chef">chef
                </Link>
            </nav>
      </div>
      </article>
    </div>
  );
}

export default Home;
  