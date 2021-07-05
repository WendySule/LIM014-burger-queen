import React from 'react';
import Burger from './Burger'


function Cart({ cart, setCart}){

  const cancelOrder = () => setCart([]);

    return (
        <div>
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
                        <Burger
                        key={e.id}
                        burger={e}
                        cart={cart}
                        setCart={setCart}
                        />
                    ))}
                        <div>
                            <hr/>
                            <div className="total-price-order">
                                <h3>Total</h3>
                                <p>{cart.map((e) => e.price).reduce( (a,b) => a + b, 0)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="send-order">
                        <button id="send-order">Enviar</button>
                    </div>
                    <div className="cancel-order">
                        <button id="cancel-order" onClick={cancelOrder}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
)}
export default Cart;
