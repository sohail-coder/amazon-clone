import React from "react";
import "./CheckOutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
function CheckOutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",

      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className="rating" />
              </p>
            ))}
        </div>
        {/* {!hideButton && ( */}
        <button onClick={removeFromBasket}>Remove from Basket</button>
        {/* ) */}
        {/* } */}
      </div>
    </div>
  );
}

export default CheckOutProduct;
