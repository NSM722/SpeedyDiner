import './App.css'
import Header from './components/Header'
import OrderWrapper from './components/OrderWrapper'
import PaymentForm from './components/PaymentForm'
import { useSelector } from 'react-redux'


function App() {

  const { isCheckout } = useSelector(state => state.paymentModal)
  console.log(isCheckout)

  return (
    <>
      <Header />
      
      {
        isCheckout ?
        <PaymentForm /> :
        <OrderWrapper />
      }
    </>
  )
}

export default App
