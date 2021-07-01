import React from "react";

function Burger({ burger, cart, setCart, burgers }){
    const { nombre, precio, id } = burger;
    const addBurger = id => {
        const burger = burgers.filter((burger) => burger.id === id)
        setCart([...cart, ...burger])
    }
    const delBurger = id => {
        const burger = cart.filter((burger) => burger.id !== id)
        setCart([...burger])
    }
    return (
        <div>
            <ul>
                <li>{nombre}
                </li>
                <li>${precio}
                </li>
                { burgers ? (
                    <div>
                    <button type='button' onClick={() => addBurger(id)}>Agregar carrito
                    </button>
                    </div>
                ) : (
                    <div>
                        <button type='button' onClick={() => addBurger(id)}> Confirmar
                        </button>

                        <button type='button' onClick={() => delBurger(id)}> Eliminar
                        </button>
                    </div>
                )
                }
            </ul>
        </div>
    )

}
export default Burger;
