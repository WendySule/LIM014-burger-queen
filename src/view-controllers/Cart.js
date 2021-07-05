import React, {useState} from "react";
import Burger from './Burger'
import { add, subtrat, totalAdd, delBurger, totalOrder } from './Order'
import { createOrder } from '../collections/firestore-controller'



function Cart({ cart, setCart }){

    const [dataOrder, setDataOrder] = useState({
        waiterName: '',
        clientName: '',
        numberTable: ''
    })     
    const handleInputChange = (e) => {
        setDataOrder({
            ...dataOrder,
            [e.target.name] : e.target.value
        })
    }
    const sendDataOrder = (setCart) => {
        const totalOrder = document.querySelector('#totalOrder').textContent
        createOrder(dataOrder.waiterName , dataOrder.clientName, parseInt(dataOrder.numberTable), cart, parseInt(totalOrder))
        setCart([])
    }

    return (
        <div>
            <div className="subtile">
                <ul>
                    <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                      Datos del Pedido
                    </li>
                        <div className="style-data-order">
                          <form>
                              <label> Waiter name
                                <input placeholder="Waiter Burger Queen"  type="text" onChange={handleInputChange} name="waiterName"/>
                              </label>
                              <label> Client name
                                <input placeholder="Client Burger Queen"  type="text" onChange={handleInputChange} name="clientName"/>
                              </label>
                              <label> N° Table
                                <input placeholder="N° Table"  type="number" onChange={handleInputChange} name="numberTable"/>
                              </label>
                              </form>
                        </div>
                    <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                      Productos del Cliente
                    </li>
                </ul>
            </div>            
            {cart.length === 0 ? (
            <p>No hay pedido.</p>
            ) : (
                <div>
                    <div className="background-order-list">
                        <ul className="flex-column">
                            <li>Producto</li>
                            <li>Precio</li>
                            <li>Cantidad</li>
                            <li>Total</li>
                            <li></li>
                        </ul>
                    {cart.map((e) => (
                        <section key={e.id}>
                            <ul className="flex-column">
                                <li>{e.product}</li>
                                <li>${e.price}</li>
                                <button type='button' className='btn-AddSubtrat' onClick={() => add(cart, setCart, e)}>➕</button>
                                <li className='counter'>{e.quanty}</li>
                                <button type='button' className='btn-AddSubtrat' onClick={() => subtrat(cart, setCart, e)}>➖ </button>
                                <li>{totalAdd(e, setCart)}</li>
                                <li onClick={() => delBurger(e.id, cart, setCart)}><img src="https://image.flaticon.com/icons/png/512/3096/3096687.png" id="icon-delete"alt="icon-delete"/></li>
                            </ul>
                        <Burger
                            key={e.id}
                            burger={e}
                            cart={cart}
                            setCart={setCart}
                        />
                        </section>
                    ))}
                        <div>
                            <hr/>
                            <div className="total-price-order">
                                <h3>Total</h3>
                                <p id="totalOrder">{totalOrder(cart)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="send-order">
                        <button id="send-order" onClick={() => sendDataOrder(setCart)}>Enviar</button>
                    </div>
                </div>
            )}        
        </div>
)}
export default Cart;