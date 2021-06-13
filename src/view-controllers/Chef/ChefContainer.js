import React from 'react';
import customerNotes from './imgChef/customerNotes.svg';
import readyOrder from './imgChef/readyOrder.svg';
import play from './imgChef/play.svg';
import stop from './imgChef/stop.svg';
import restart from './imgChef/restart.svg';

function ChefContainer() {
  return (
    <section>
        <section className="chef-container">
            <section className='orders-chef'>
                <h1 className='chef-title'>Pedidos al Chef</h1>
            </section>
            <section className='data-container'>
                <section className='orders-container'>
                  <section className='container-principal'>
                      <section>
                        <h2 className='customers-names'>Cliente: Madison</h2>
                      </section>
                      <section className='prepare-orders'>
                        <h3 >Pedidos:</h3>
                        <section className='the-orders'>
                          <section id='ordersPrepare'>'aqui va los pedidos'</section>
                          <input type='text' className='number-orders'></input>
                        </section>
                      </section>
                      <section className='note-container'>
                        <img src={customerNotes} className='note-icon' alt='customers-notes'/>
                        <input type='text' placeholder='Escriba una nota aquí' className='customer-notes'></input>
                      </section>
                  </section>
                </section>
                <section className='time-container'>
                  <section className='count' id='hms'>00:00:00</section>
                  <img src={play} className='btn start' alt='play'/>
                  <img src={stop} className='btn stop' alt='stop'/>
                  <img src={restart} className='btn restart' alt='restart'/>
                </section>
                <section className='ready-container'>
                  <img src={readyOrder} className='ready-order rotate' alt='ready-order'/>
                </section>
            </section>
        </section>
    </section>
  );











}

export default ChefContainer;
