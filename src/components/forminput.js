// FormInput.js
import React, { useState } from 'react';
function FormInput() {
const [inputValue, setInputValue] = useState('');
const [inputValue2, setInputValue2] = useState('');
function handleChange(event) {
setInputValue(event.target.value);

}
function handleChange2(event) {
    setInputValue2(event.target.value);
    
    }
return (
<div>
<input type="text" value={inputValue} onChange={handleChange}
/>
<p>Current Input: </p>
<p>{inputValue}</p>
<input type="text" value={inputValue2} onChange={handleChange2}
/>
<p>Current Input 27: </p>
<p>{inputValue2}</p>
</div>
);
}
export default FormInput;