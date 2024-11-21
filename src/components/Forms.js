import React, { useState } from 'react';
import './Form.css'; // Importing the CSS file
const Form = ({ onSubmit }) => {
 // State to manage form inputs
 const [formData, setFormData] = useState({
 name: '',
 address: '',
 phone: '',
 email: ''
 });
 // Handle input change
 const handleChange = (e) => {
 setFormData({
 ...formData,
 [e.target.name]: e.target.value
 });
 };
 // Handle form submission
 const handleSubmit = (e) => {
 e.preventDefault();
 onSubmit(formData);
 setFormData({ name: '', address: '', phone: '', email: '' }); // Reset form
 };
 return (
    
 <form className="form-container" onSubmit={handleSubmit}>
 <h1>Leave Us A Message</h1>
 <div className="form-group">
 <label htmlFor="name">Name:</label>
 <input
 type="text"
 id="name"
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="email">Email:</label>
 <input
 type="email"
 id="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 required
 />
 </div>
 <div className="form-group texts">
 <label htmlFor="text">message:</label>
 <textarea
 type="textarea"
 id="text"
 name="text"
 value={formData.text}
 onChange={handleChange}
 required
 />
 </div>
 <button type="submit">Submit</button>
 <br></br> <br></br> <br></br>
 </form>
 );
};
export default Form;
