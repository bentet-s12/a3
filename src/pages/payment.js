import React, { useState } from 'react';
import { useAdoptContext } from './adoptcontext'; // Import the AdoptContext
import '../components/Form.css';

const Pay = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [cc, setCc] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [cvc, setCvc] = useState('');

  const { adoptArray, setAdoptArray } = useAdoptContext(); // Access AdoptContext

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log or validate the payment details
    console.log({
      firstName: name1,
      lastName: name2,
      cardNumber: cc,
      expiryMonth: expMonth,
      cvc: cvc,
    });

    // Update AdoptContext to mark all unpaid adoptions as paid
    const updatedAdoptArray = adoptArray.map((item) => ({
      ...item,
      paid: true, // Set the `paid` status to true for all items
    }));

    setAdoptArray(updatedAdoptArray);

    console.log(adoptArray);
  };

  return (
    <div className="form-container alt">
      <div className="alt_page_images img">
        <h1>Payment</h1>
      </div>

      <div className="form2">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                required
              />
              <label>Last Name:</label>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="number"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label>Expiry Month:</label>
              <input
                type="month"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label>CVC:</label>
              <input
                type="password"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Pay</button>
        </form>
      </div>
    </div>
  );
};

export default Pay;
