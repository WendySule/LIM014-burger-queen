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
                        <p>$ {price}</p>
                        <p>{product}</p>
                        <section>
                        <button id='decrease' onClick={e=> this.decrease(e)}>➖</button  >
                          <div className='count'> Agregar carrito
                          </div>
                          <button type='button' id='increase' onClick={() => addBurger(id)} >➕</button>
                        </section>
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
