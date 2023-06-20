import { useDispatch } from "react-redux"
import { decrementFoodItem, incrementFoodItem, calculateTotalSum } from "../features/foodItemsSlice"

// eslint-disable-next-line react/prop-types
const FoodItem = ({ name, ingredients, price, emoji, id, amount }) => {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    // console.log(`${id} add btn clicked`)
    dispatch(incrementFoodItem(id))
    dispatch(calculateTotalSum())
  }

  const handleDecrement = () => {
    // console.log(`${id} remove btn clicked`)
    amount > 0 && dispatch(decrementFoodItem(id))
    dispatch(calculateTotalSum())
  }
  
  return (
    <>
      <div className="item-wrapper">  
        <div className="item-emoji">{emoji}</div>
        <div className="item-description">
          <p className="">{name}</p>
          <p className="">
            {
              ingredients
            }
          </p>
          <p className="">${price}</p>
        </div>
        <p className="item-quantity">quantity: {amount}</p>
        <div className="btn-wrapper">
          <button
            type="button"
            className="btn btn-increment"
            onClick={() => handleIncrement()}
          >+</button>
          <button
            type="button"
            className="btn btn-decrement"
            onClick={() => handleDecrement()}
          >-</button>
        </div>
      </div>
    </>
  )
}

export default FoodItem