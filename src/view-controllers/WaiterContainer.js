import React, { Component } from 'react'

class WaiterContainer extends Component {
  state = {
    loading : true,
    product : null
  }
    async componentDidMount() {
    const url = 'https://burger-queen-45750-default-rtdb.firebaseio.com/productos.json'
    const response = await fetch(url)
    const data = await response.json()
    const arrayBreakfast = Object.values(data.desayuno);
    const arrayMenu = Object.values(data.menu);
    //console.log(data)
    const newArray = arrayBreakfast.concat(arrayMenu);
    //console.log(newArray)
    this.setState({product : newArray, loading: false})

  }
  render () {

     return (
      <div>
          <section className="waiter-container">
              <article>
                  <ul className="select-menu">
                      <li><img src="https://image.flaticon.com/icons/png/512/1037/1037762.png" alt="icon-select-menu"/>menú</li>
                      <li><img src="https://image.flaticon.com/icons/png/512/887/887359.png" alt="icon-select-breakfast"/>desayuno</li>
                  </ul>
                  <div className="gallery">
                    {this.state.loading || !this.state.product ?(
                       <div>loading...</div>
                       ) : (
                       <div className="gallery-container">
                         {this.state.product.map((e) => (
                           <div key={e.nombre}>
                             <img src={e.img} alt={e.nombre}/>
                             <p>$ {e.precio}</p>
                             <p>{e.nombre}</p>
                           </div>
                         ))}
                      </div>
                      )}
                  </div>
              </article>
              <article className="select-breakfast">
                <ul>
                  <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                    Datos del Pedido
                  </li>
                  <li><img src="https://image.flaticon.com/icons/png/512/43/43869.png" alt="more-icon"/>
                    Productos del Cliente
                  </li>
                </ul>
              </article>
          </section>
      </div>
    );
  }
}
export default WaiterContainer;
