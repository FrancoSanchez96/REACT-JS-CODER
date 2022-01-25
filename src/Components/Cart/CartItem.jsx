import React from 'react';
import useCartContext from '../CartContext';


const CartItem = (props) => {

    const {removeFromCart } = useCartContext()
  return (
      <tr className='CartItem'>
          <td>
             <img src={props.imgUrl} alt={props.title} />
          </td>
          <td>
              {props.title}
          </td>
          <td>
                {props.price}
          </td>
          <td>
                {props.quantity}
          </td>
          <td>
                {props.quantity * props.price}
          </td>
          <td>
              <button onClick={()=>removeFromCart(props.id)}>
                x
              </button>
          </td>
      </tr>
  );
};

export default CartItem;
