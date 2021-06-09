import burger from '../burger_log.svg';
import allGalerry from '../All-Gallery.svg';
import Waiter from '../Waiter-logo.svg';

function MenuBar() {
  return (
    <div>
      <section className="header-menu-bar">
        <nav className="menu">
          <ul>
            <li>
              <div className="burger-logo-container">
                <img src={burger} className="burger-logo-menu-bar" alt="logo-burger-queen" />
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
            <li>
              <img src={Waiter} className="icon-waiter" alt="icon-waiter" />
            </li>
          </ul>
        </nav>
      </section>
    </div> 
  );
}

export default MenuBar;