import React from 'react'
import './SignUpForm.css'; // Import the CSS file
// import { Link } from 'react-router-dom'

export default function SignUpForm({userType}) {
  return (
    

    <div>
      <form>
      <h2>Sign Up as {userType === 'seller' ? 'Seller' : 'Buyer'}</h2>
      {/* Common form fields */}
      <label>Email:</label>
      <input type="text" name="email" />

      {/* Conditionally render seller-specific fields */}
      {userType === 'seller' && (
        <div>
          <label>Shop Name:</label>
          <input type="text" name="shopName" />
        </div>
      )}
      {/* Conditionally render buyer-specific fields */}
      {userType === 'buyer' && (
        <div>
          <label>Shipping Address:</label>
          <input type="text" name="shippingAddress" />
        </div>
      )}
      {/* Other common form fields */}
      <button type="submit">Sign Up</button>
    </form>
    </div>
  )
}
