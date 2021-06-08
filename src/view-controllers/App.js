import React from "react";
import burger from '../burger_log.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={burger} className="burger-logo" alt="logo-burger-queen" />
        </nav>
      </header>
      <article className="App-header">
        <div>
          <h1>bienvenido</h1>
          <p>escoge tu puesto</p>
          <section className="App-link">
            <a href="/mesero">
              mesero
            </a>
            <a href="/mesero">
              chef
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}

export default App;
