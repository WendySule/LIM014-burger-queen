import React from "react";

function WaiterContainer() {
  return (
    <div>
        <section className="waiter-container">
            <article>
                <ul className="select-menu">
                    <li><img src="https://image.flaticon.com/icons/png/512/1037/1037762.png" alt="icon-select-menu"/>menú</li>
                    <li><img src="https://image.flaticon.com/icons/png/512/887/887359.png" alt="icon-select-breakfast"/>desayuno</li>
                </ul>
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

export default WaiterContainer;
