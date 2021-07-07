import burger from './imgChef/burger_log.svg';
import Chef from './imgChef/Chef-logo.svg';
import { Link } from "react-router-dom";

function ChefMenu() {
  return (
    <div>
      <section className="header-menu-bar">
        <nav className="menu">
          <ul>
            <li>
              <div className="burger-logo-container">
                <Link to="/">
                <img src={burger} className="burger-logo-menu-bar" alt="logo-burger-queen" />
                </Link>
                <h1>burger queen</h1>
              </div>
            </li>
            <li>
              <div className="wrapper">
                <div className="search-input">
                  <input type="text" placeholder="Type to search.."/>
                  <div className="autocom-box">
                  </div>
                  <div className="icon"><i className="fas fa-search"></i>
                  </div>
                </div>
              </div>
            </li>
            <Link to="/HistorialContainer" id="history-Order">Historial</Link>
            <li>

              <img src={Chef} className="chef-icon" alt="chef-icon" />
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default ChefMenu;
