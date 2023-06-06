import React from 'react'
import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider'
import { getBAsketTotal } from '../../reducer';



function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* price */}

      {/* currency formt - formatting the thousands, can be done manually as well */}

      <p>
        Subtotal ({basket.length} items): <strong></strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
