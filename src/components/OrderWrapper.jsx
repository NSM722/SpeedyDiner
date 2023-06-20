import { useSelector } from "react-redux"
import FoodItem from "./FoodItem"
// import { v4 as uuidv4 } from "uuid";


const OrderWrapper = () => {
  
  const { foodItems, amountOfItems, totalPrice } = useSelector(state => state.foodItems)
  // console.log(foodItems)

  const handleTransaction = () => {
    console.log(`checkout button clicked`)
  }

  return (
    <>
      <main className="wrapper">
        {
          foodItems.map(item => (
            <FoodItem
              key={item.id}
              { ...item }
            />
          ))
        }
      </main> 
      <footer>
        <div>
          <span>Total Food Items: {amountOfItems}</span>
          &nbsp;
          &nbsp;
          <span>Total Amount: ${totalPrice}</span>
        </div>
        {
          totalPrice > 0 && 
          <div>
            <button 
              className="btn btn-checkout"
              onClick={() => handleTransaction()}>
                checkout
            </button>
          </div>
        }
      </footer> 
    </>
  )
}

export default OrderWrapper