import burger from '../img-svg/burger_log.svg'
import allGalerry from '../img-svg/All-Gallery.svg'
import Waiter from '../img-svg/Waiter-logo.svg'
import { Link } from "react-router-dom"

function MenuBar() {
  return (
    <div>
      <section className="header-menu-bar">
        <nav className="menu">
          <ul>
            <li>
              <div className="burger-logo-container">
                <Link to="/">
                <img src={burger} className="burger-logo-menu-bar" alt="logo-burger-queen"/>
                </Link>
                <h1>burger queen</h1>
              </div>
            </li>
            <li>
              <img src={allGalerry} className="icon-all-gallery" alt="icon-return-gallery" />
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
            <Link to="/SendOrder" id="history-Order">Serve the order</Link>
            <Link to="/OrderHistory" id="history-Order">Order History</Link>
            <li>
              <img src={Waiter} className="icon-waiter" alt="icon-waiter" />
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default MenuBar
