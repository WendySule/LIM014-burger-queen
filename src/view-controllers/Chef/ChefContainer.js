import React from 'react';
import customerNotes from './imgChef/customerNotes.svg';
import readyOrder from './imgChef/readyOrder.svg';
import play from './imgChef/play.svg';
import stop from './imgChef/stop.svg';
import restart from './imgChef/restart.svg';

function ChefContainer() {
  return (
    <section>
        <section class="chef-container">
            <section class='orders-chef'>
                <h1 class='chef-title'>Pedidos al Chef</h1>
            </section>
            <section class='data-container'>
                <section class='orders-container'>
                  <section class='container-principal'>
                      <section>
                        <h2 class='customers-names'>Cliente: Madison</h2>
                      </section>
                      <section class='prepare-orders'>
                        <h3 >Pedidos:</h3>
                        <section class='the-orders'>
                          <section id='ordersPrepare'>'aqui va los pedidos'</section>
                          <input type='text' class='number-orders'></input>
                        </section>
                      </section>
                      <section class='note-container'>
                        <img src={customerNotes} class='note-icon' alt='customers-notes'/>
                        <input type={Text} placeholder='Escriba una nota aquí' class='customer-notes'></input>
                      </section>
                  </section>
                </section>
                <section class='time-container'>
                  <section class='count' id='hms'>00:00:00</section>
                  <img src={play} class='btn start' alt='play'/>
                  <img src={stop} class='btn stop' alt='stop'/>
                  <img src={restart} class='btn restart' alt='restart'/>
                </section>
                <section class='ready-container'>
                  <img src={readyOrder} class='ready-order rotate' alt='ready-order'/>
                </section>
            </section>
        </section>
    </section>
  );











}

export default ChefContainer;
