import React, { useState } from 'react'
import './addcourse.css'
const AddCourse = ({setToggle}) => {
  const [formData, setFormData] = useState([{
    name: '',
    email: '',
    message: ''
  }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData([...formData,{
      [name]: value
    }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };
  return (
    <div className='addCourse_Box' >
        <div className="closeBtn">
            <button onClick={()=>setToggle(false)} >X</button>
        </div>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message:</label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
        </div>

  )
}

export default AddCourse