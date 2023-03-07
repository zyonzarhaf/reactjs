import React from 'react'
import CartItem from './CartItem'
import { useAppContext } from './context'

const CartContainer = () => {
  const { cart, amount, total} = useAppContext();

  if (cart.length === 0) {
    return (
      <main className='cart'>
          <header>
            <h3>your bag is currently empty</h3>
          </header>
      </main>
    );

  } else {
    return (
      <main className='cart'>
          {/* left pane */}
          <section className='left-pane'>
            <header>
              <h2>your bag</h2>
            </header>
            <hr />
            {/* cart items */}
            <div>
              {cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
          </section>
          {/* right pane */}
          <section className='right-pane'>
            <header>
              <h2>order summary</h2>
            </header>
            <hr />
            <div className='order-summary'>
              <h4>{amount} items</h4>
            </div>
            <div className='order-summary'>
              <h4>subtotal</h4>
              <h4>${total}</h4>
            </div>
            <div className='order-summary'>
              <h4>shipping</h4>
              <h4>-</h4>
            </div>
            <div className='order-summary'>
              <h4>discount</h4>
              <h4>-</h4>
            </div>
            <hr />
            <div className='order-summary'>
              <h4>total</h4>
              <h4>${total}</h4>
            </div>
            <button className='btn checkout-btn'>checkout</button>
            <button className='btn continue-shopping-btn'>continue shopping</button>
          </section>
      </main>
    );
  }
};

export default CartContainer;