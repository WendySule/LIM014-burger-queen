import React from "react";
import Burger from './Burger'

function Cart({ cart, setCart }){
    return (
        <div>
            {cart.length === 0 ? (
            <p>No hay pedido.</p>
            ) : (
            cart.map((burger) => (
                <Burger
                key={burger.id}
                burger={burger}
                cart={cart}
                setCart={setCart}
                />
            ))
            )}        
        </div>
)}
export default Cart;