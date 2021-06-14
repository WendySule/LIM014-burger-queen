import React, { useState, useEffect  } from 'react';
import Burger from './Order';
import Cart from './Cart';

function WaiterContainer() {
  const [burgers, setBurgers] = useState([
    { id: 1,  nombre: "SALTEÑA", precio: 250 },
    { id: 2,  nombre: "PORTEÑA", precio: 180 },
    { id: 3,  nombre: "CHICKEN", precio: 150 },
    { id: 4,  nombre: "CRIOLLA", precio: 200 },
    { id: 5,  nombre: "PATAGONIA", precio: 240 },
  ]);
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    const getData = async() => {
      const url = 'https://burger-queen-45750-default-rtdb.firebaseio.com/productos.json'
      const response = await fetch(url)
      const data = await response.json()
      const arrayBreakfast = Object.values(data.desayuno);
      const arrayMenu = Object.values(data.menu);
      console.log(data)
      const newArray = arrayBreakfast.concat(arrayMenu);
      setBurgers(newArray)
     // console.log(newArray)
    };
      getData();
    //setBurgers([getData()])
  }, []
  );


  return (
      <div>
          <section className="waiter-container">
              <article>
                  <ul className="select-menu">
                      <li><img src="https://image.flaticon.com/icons/png/512/1037/1037762.png" alt="icon-select-menu"/>menú</li>
                      <li><img src="https://image.flaticon.com/icons/png/512/887/887359.png" alt="icon-select-breakfast"/>desayuno</li>
                  </ul>
                  <div className="gallery">
                      <div className="gallery-container">
                      { burgers.map((burger, index) => (
                        <Burger
                          key={index}
                          burger={burger}
                          cart={cart}
                          setCart={setCart}
                          burgers={burgers}
                        />
                      ))}
                      </div>
                  </div>
              </article>
              <article className="select-breakfast">
                <ul>
                  <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                    Datos del Pedido
                  </li>
                  <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                    Productos del Cliente
                  </li>
                </ul>
                <Cart
                cart= {cart}
                setCart= {setCart}
                />
              </article>
          </section>
      </div>
    );
  }
export default WaiterContainer;
