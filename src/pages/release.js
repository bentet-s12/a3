import React, { useState } from 'react';
import '../components/Form.css';

const Release = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      firstName: name1,
      lastName: name2,
      email: email,
      address: address,
      consultationDate: date,
      agreementChecked: isChecked,
    });
  };

  return (
    <div className="form-container alt">
      <div className="alt_page_images img">
        <h1>Release Form</h1>
      </div>

      <div className="form2">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              required
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="consultationDate">Consultation Date:</label>
            <input
              id="consultationDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              id="agreement"
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <p className='warning'>
              By ticking this checkbox, you understand that you might never see your pet again.
            </p>
          </div>

          <button type="submit" disabled={!isChecked}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Release;
