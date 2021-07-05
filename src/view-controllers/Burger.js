import React from "react";


function Burger({ burger, cart, setCart }){
    const { product, price, id, img } = burger;
    const addBurger = (burger) => {
        const burgert = cart.find((x) => x.id === burger.id);
        if (burgert) {
          setCart(
            cart.map((x) =>
            x.id === burger.id ? {...burgert, quanty: burgert.quanty + 1 } : x
          )
          );
        } else {
          setCart([...cart, {...product, quanty: 1 }]);
        }
    }

    return (
        <div key={id}>
          <img src={img} alt={product}/>
          <p>${price}</p>
          <p>{product}</p>
          <button type='button' onClick={() => addBurger(id)}>Agregar carrito
          </button>
      </div>
    )
}

export default Burger;



