// Suma de cantidades
const add= (cart, setCart, burger) => {
    const existProduct = cart.find((products) => products.id === burger.id)
    if (existProduct) {
      setCart(
        cart.map((products) =>
          products.id === burger.id ? { ...existProduct, quanty: existProduct.quanty + 1 } : products
        )
      )
    } else {
      setCart([...cart, { ...burger, quanty: 1 }])
    }
}

const subtrat = (cart, setCart, burger) => {
    const existProduct = cart.find((products) => products.id === burger.id)
    if (existProduct.quanty === 1) {
      setCart(cart.filter((products) => products.id !== burger.id))
    } else {
      setCart(
        cart.map((products) =>
        products.id === burger.id ? { ...existProduct, quanty: existProduct.quanty - 1 } : products
        )
      )
    }
  }
  const totalAdd = (burger) => burger.price*burger.quanty

  const delBurger = (cart, setCart, burger) => {
    const product = cart.filter((products) => products.id !== burger.id)
    setCart([...product])
}

const totalOrder = (cart) => cart.reduce((a, c) => a + c.quanty * c.price, 0)

const cancelOrder = (setCart) => setCart([])

// const timeFormat = (date) => {
//     if (!date) return "00:00:00";

//     let mm = date.getUTCMinutes();
//     let ss = date.getSeconds();
//     let cm = Math.round(date.getMilliseconds() / 10);

//     mm = mm < 10 ? "0"+mm :  mm;
//     ss = ss < 10 ? "0"+ss :  ss;
//     cm = cm < 10 ? "0"+cm:  cm;

//     return `${mm}:${ss}:${cm}`;
// };


export {
    add, subtrat, totalAdd, delBurger, totalOrder,cancelOrder
  }
