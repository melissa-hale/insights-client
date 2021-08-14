import React, { Component } from "react";
import "./BusinessDetails.css";
// don't need history package to receive history location state|data
// import { useHistory } from "react-router-dom";

// state|data received as props
// const BusinessDetails = () => {
const BusinessDetails = ( props ) => {
	let fakeData = {
    			name: "McDonalds",
				description: "I'm lovin it",
				imageUrl: "https://media-cdn.tripadvisor.com/media/photo-p/14/c5/a1/6a/photo0jpg.jpg",
				businessUrl: 'http://www.mcdonalds.com',
				phone: "555-555-5555"	
	};

	// initialize details equal to fakeData object, for debug
	// let details = fakeData;

	// receive state|data - data should be unique targetted business details
	let details = props.location.state;

	return(
      <div className="container">
		  {/* need styling */}
		  <span className="biz_image_container">
			  <img className="biz_image" src={ details.imageUrl }></img>
		  </span>
		  <span className="biz_details">
			  <h1>{ details.name }</h1>
			  <h2>{ details.description }</h2>
			  <h3>{ details.phone }</h3>
			  <h4>{ details.businessUrl }</h4>
		  </span>
      </div>
    );
} // end BusinessDetails

export default BusinessDetails;
