import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import './NewBusiness.css'

const NewBusiness = () => {
  const [formData, setFormData] = useState({})

  const handleInputChange = (event) => {
    // unpack values from input
    let formField = event.target.id;
    let formVal = event.target.value;

    // build an object using those values
    let thisFormData = {
      [formField]: formVal,
    };
    // set it in state (i am sure there is a better way to do this)
    setFormData({
      ...formData,
      ...thisFormData,
    });
    // debug
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  };

  return (
    <div className="container">
      <h3 className="text-light">
        Know of a minority owned business? Let us know!!
      </h3>
      <form autocomplete="off" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="bizName"
            placeholder="Insights Inc"
            onChange={handleInputChange}
          ></input>
          <label for="bizName">Business Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="form-control"
            id="bizPhone"
            placeholder="phone number"
            onChange={handleInputChange}
          ></input>
          <small className="text-light">Format: (123)456-7890</small>
          <label for="bizPhone">Phone Number</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="bizUrl"
            placeholder="Insights Inc"
            onChange={handleInputChange}
          ></input>
          <label for="bizUrl">Business Website URL</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            id="bizDesc"
            placeholder="Greatest business of all time"
            style={{ height: '100px' }}
            onChange={handleInputChange}
          ></textarea>
          <label for="bizDesc">Short Description of Business</label>
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default NewBusiness
