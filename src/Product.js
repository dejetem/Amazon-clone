import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({id, title, price, image, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
               <p>{title}</p>
               <p className="product_price">
                   <small>$</small>
                   <strong>{price}</strong>
               </p>
               <div className="product_rating">
                   {Array(rating).fill().map((_, i) => (
                      <StarIcon />
                   ))}
               </div>
            </div>
            <img src={image} alt="product"
            />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
