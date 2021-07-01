import React, { useEffect, useState } from 'react';
import { db } from '../collections/firebase-config'
import Burger from './Burger'
import Cart from './Cart'

function WaiterContainer() {
const [menu, setMenu] = useState([])
const [cart, setCart] = useState([])
const [type, setType] = useState('menu')

  useEffect(() => {
    var docRef = db.collection('menu')

    docRef.get().then((doc) => {
      const documents = []
      doc.forEach(e => {
        documents.push({ id: e.id, ...e.data()})
      })
      setMenu(documents.filter(e => e.category === type))
      //setMenu(documents)
      //console.log(setMenu)
    })
  }, [type])
  //console.log(useEffect)
  return (
      <div>
          <section className="waiter-container">
              <article>
                  <ul className="select-menu">
                      <li onClick={()=>{setType('menu')}}><img src="https://image.flaticon.com/icons/png/512/1037/1037762.png" alt="icon-select-menu"/>menú</li>
                      <li onClick={()=>{setType('desayuno')}}><img src="https://image.flaticon.com/icons/png/512/887/887359.png" alt="icon-select-breakfast"/>desayuno</li>
                  </ul>
                  <div className="gallery">
                      <div className="gallery-container">
                      {menu.map((e) => (
                        <Burger
                          key= {e.id}
                          burger = {e}
                          cart = {cart}   
                          setCart={setCart}
                          burgers={menu}   
                          />
                        ))}
                      </div>
                  </div>
              </article>
              <article className="select-breakfast">
                <div className="subtile">
                  <ul>
                    <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                      Datos del Pedido
                    </li>
                    <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                      Productos del Cliente
                    </li>
                  </ul>
                </div>
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
