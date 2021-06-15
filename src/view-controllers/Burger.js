import React from "react";

function Burger({ burger, cart, setCart, burgers }){
    const { product, price, id, img } = burger;
    const addBurger = id => {
        const burger = burgers.filter((burger) => burger.id === id)
        setCart([...cart, ...burger])
    }
    const delBurger = id => {
        const burger = cart.filter((burger) => burger.id !== id)
        setCart([...burger])
    }
    return (
        <div key={id}>
                { burgers ? (
                    <div>
                        <img src={img} alt={product}/>
                        <p>$ {price}</p>
                        <p>{product}</p> 
                        <button type='button' onClick={() => addBurger(id)}>Agregar carrito
                        </button>
                    </div>
                ) : (
                    <div>
                        <p>{product}</p> 
                        <p>$ {price}</p>
                        <p>1</p>
                        <p>$ {price}</p>
                        <button type='button' onClick={() => delBurger(id)}> Eliminar
                        </button> 
                    </div>       
                )
                }
        </div>
    )

}
export default Burger;