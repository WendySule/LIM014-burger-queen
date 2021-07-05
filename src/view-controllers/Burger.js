import React from "react";
import { add } from './Order'

function Burger({ burger, cart, setCart }){
    const { product, price, id, img } = burger;
    return (
        <div key={id}>
            { burgers ? (
                <div>
                    <img src={img} alt={product}/>
                    <p>${price}</p>
                    <p>{product}</p>
                    <button type='button' onClick={() => add(cart, setCart, burger)}>Agregar carrito
                    </button>
                </div>
                ) : (
                <>
                </>
                )
            }
        </div>
    )
}

export default Burger;



