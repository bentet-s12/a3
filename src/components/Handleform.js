import React from 'react';
import Form from './Forms';
//import styles from './Styles.css';

const formhandle = (data) => {
 const handleFormSubmit = (formData) => {
 console.log('Form Data:', formData);
 // Process form data here
 };
 return (
 <div>
 <h1>Reusable Form Component</h1>
 <Form onSubmit={handleFormSubmit} />
 </div>
 );
};
export default formhandle;