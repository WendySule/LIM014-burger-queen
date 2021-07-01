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
    // const increase = (e, stock) => {
    //   let value = e.target.parentElement.getElementsByClassName('count')[0].textcontent;
    //   if (Number(value) !== Number(stock)){
    //     return e.target.parentElement.getElementsByClassName('count')[0].textcontent =Number(value) + 1;
    //   }
    // }
    // const decrease = e =>{
    //   let value = e.target.parentElement.getElementsByClassName('count')[0].textcontent;
    //   if(value>0){
    //     return e.target.parentElement.getElementsByClassName('count')[0].textcontent = Number(value) - 1;
    //   }
    // }

    return (
        <div key={id}>
            { burgers ? (
                <div>
                    <img src={img} alt={product}/>
                    <p>${price}</p>
                    <p>{product}</p>
                    <button type='button' onClick={() => addBurger(id)}>Agregar carrito
                    </button>
                </div>
                ) : (
                <>
                    <ul className="flex-column">
                        <li>{product}</li>
                        <li>${price}</li>
                        <li>1</li>
                        <li>${price}</li>
                        <li onClick={() => delBurger(id)}><img src="https://image.flaticon.com/icons/png/512/3096/3096687.png" id="icon-delete"alt="icon-delete"/></li>
                    </ul>
                </>
                )
            }
        </div>
    )

}
export default Burger;
