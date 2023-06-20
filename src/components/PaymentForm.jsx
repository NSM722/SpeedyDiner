const PaymentForm = () => {
  return (
    <form className="payment-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" name="address" placeholder="Enter your address" required />

      <button className="form-btn" type="submit">Submit</button>
    </form>

  )
}

export default PaymentForm