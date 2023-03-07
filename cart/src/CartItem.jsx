import React from 'react';
import { useAppContext } from './context';
import { GrFormNext, GrFormPrevious } from 'react-icons/Gr';
import { BsTrash } from 'react-icons/Bs';

const CartItem = (props) => {
  const { id, img, title, price, amount } = props;
  const { removeItem, changeQtd } = useAppContext();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
      </div>
      <button className='remove-btn' onClick={() => removeItem(id)}><BsTrash/></button>
      <div className='amount-btn-container'>
        <button className='amount-btn' onClick={() => changeQtd(id, 'decrease')}><GrFormPrevious/></button>{/* decrease amount */}
        <p className='amount'>{amount}</p>{/* amount */}
        <button className='amount-btn' onClick={() => changeQtd(id, 'increase')}><GrFormNext/></button>{/* increase amount */}
      </div>
    </article>
  )
}

export default CartItem
