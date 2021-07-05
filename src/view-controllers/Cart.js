import React, {useState, useReducer, useEffect } from "react";
import Burger from './Burger'
import { add, subtrat, totalAdd, delBurger, totalOrder, cancelOrder } from './Order'
import { createOrder } from '../collections/firestore-controller'

function Cart({ cart, setCart}){
    const initialState = {
        waiterName: '',
        clientName: '',
        numberTable: ''
    }

    const [dataOrder, setDataOrder] = useState(initialState) 
    const [totalPrice, setTotalPrice] = useState(totalOrder(cart)) 
    
    useEffect(() => {
        setTotalPrice(totalOrder(cart))
    }, [cart])

    const handleInputChange = (e) => {
        setDataOrder({
            ...dataOrder,
            [e.target.name] : e.target.value
        })
    }
    const reducer = (state, action) => {
        if (action.type === "reset") {
            setDataOrder(initialState)
            return initialState;
        }
    
        const result = { ...state };
        result[action.type] = action.value;
        return result;
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const sendDataOrder = (setCart) => {
        createOrder(dataOrder.waiterName , dataOrder.clientName, parseInt(dataOrder.numberTable), cart, parseInt(totalPrice))
        setCart([])
        dispatch({ type: "reset" })
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
                                <input placeholder="Waiter Burger Queen"  type="text" onChange={handleInputChange} name="waiterName" value={dataOrder.waiterName}/>
                              </label>
                              <label> Client name
                                <input placeholder="Client Burger Queen"  type="text" onChange={handleInputChange} name="clientName" value={dataOrder.clientName}/>
                              </label>
                              <label> N° Table
                                <input placeholder="N° Table"  type="number" onChange={handleInputChange} name="numberTable" value={dataOrder.numberTable}/>
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
                                <li onClick={() => delBurger(cart, setCart, e)}><img src="https://image.flaticon.com/icons/png/512/3096/3096687.png" id="icon-delete"alt="icon-delete"/></li>
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
                                <p id="totalOrder">{totalPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="send-order">
                        <button id="send-order" onClick={() => sendDataOrder(setCart)}>Enviar</button>
                    </div>
                    <div className="cancel-order">
                        <button id="cancel-order" onClick={() => cancelOrder(setCart)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
)}
export default Cart;
