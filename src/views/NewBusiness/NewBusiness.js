import React, { useEffect, useState } from 'react'
import { config } from '../../config'

import './NewBusiness.css'

const NewBusiness = () => {
  const [formData, setFormData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (event) => {
    // unpack values from input
    let formField = event.target.id
    let formVal = event.target.value

    // build an object using those values
    let thisFormData = {
      [formField]: formVal,
    }
    // set it in state (i am sure there is a better way to do this)
    setFormData({
      ...formData,
      ...thisFormData,
    })
    // debug
    console.log(formData)
  }

  //   name: req.body.name,
  //   description: req.body.description,
  //   imageUrl: req.body.imageUrl,
  //   businessUrl: req.body.businessUrl,
  //   phone: req.body.phone

  // {bizName: "name", bizPhone: "713-304-4344", bizUrl: "http://www.biz.com", bizDesc: "description"}

  const handleSubmit = (event) => {
    event.preventDefault()

    // build a request body to post to the api using the
    // object in formData state object
    // using a static image URL until i get upload image working
    let requestBody = {
      ...formData,
      imageUrl: 'https://i.redd.it/2ppf92l7hna51.jpg',
    }
    console.log(requestBody)

    fetch(`${config.apiUrl}/business`, {
      method: 'post',
      body: JSON.stringify(requestBody),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitted(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (isSubmitted) {
    return (
      <div className="container blur-background">
        <h3 className="text-light">Thanks for your submission!  We will add the business to our database after we have reviewed the details.</h3>
        <a className="btn btn-primary" href="/">Return Home</a>
      </div>
    )
  } else {
    return (
      <div className="container">
        <h3 className="text-light">
          Know of a minority-owned business? Let us know!!
        </h3>
        <form autocomplete="off" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Insights Inc"
              onChange={handleInputChange}
            ></input>
            <label for="name">Business Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className="form-control"
              id="phone"
              placeholder="phone number"
              onChange={handleInputChange}
            ></input>
            {/* <small className="text-light">Format: (123)456-7890</small> */}
            <label for="phone">Phone Number</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="url"
              className="form-control"
              id="businessUrl"
              placeholder="Insights Inc"
              onChange={handleInputChange}
            ></input>
            <label for="businessUrl">Business Website URL</label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              id="description"
              placeholder="Greatest business of all time"
              style={{ height: '100px' }}
              onChange={handleInputChange}
            ></textarea>
            <label for="description">Short Description of Business</label>
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewBusiness
