import React, { Component } from "react";
import "./Results.css";

// import withRouter to navigate route with state and push state|data downstream
import { withRouter } from "react-router-dom";

class Results extends Component {
	// class component, but not using constructor
	// don't need props or state initialization
	// state|data pushed in, received with props.history

	// handleClick() method
	// avoid need for binding by using arrow function

	// currying in order to use two parameters - event, index - did not work
	// clickHandler = ( indexPar ) => ( event ) => {

	// but, don't need formal 'event', so can just use index parameter
	clickHandler = ( indexParam ) => {
		// history.push can both push state|data and navigate to the route
		// Will not use "Link to"

		// this.props.history.push("/businessDetails");
		// this.props.history.push("/businessDetails", { message: indexPar} );

		// pushing state[index] - state is array of businesses and their data
		// index for target business
		this.props.history.push("/businessDetails", this.props.location.state[indexParam] );
	}

  render() {
    return (
      <div className="container">
        {/* {console.log(this.props.location.state)} */}
        {/* <h1>Here you are!</h1> */}
        <div className="row">
          {
            // below is where the cards can be adjusted for each result
          }
		  {/* state received businesses, an array of objects */}
		  {/* added index native parameter to map() */}
          {/* this.props.location.state.map(( business ) => ( */}
          {this.props.location.state.map(( business, index ) => (
            <div key={business._id} className="col-12 col-md-6 card">
              <img alt="yes" src={business.imageUrl}></img>
              <div className="card-body">
                <h5 className="card-title">{business.name}</h5>
                <p className="card-text">{business.description}</p>
				
				{/* replace ref link with button, button click will push state|data
					and navigate to /BusinessDetails route */}
				{/*
                <a
                  href={business.businessUrl}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                 Click for more details 
                </a>
				*/}

				{/* need to pass index argument to onClick function,
					so will use "easy way" arrow function, downside is re-renders
				<button type="button" onClick={ this.clickHandler }>
					Click for more details</button>
				 */}
				<button
					type="button"
					onClick={ () => this.clickHandler( index ) }
				>
					Click for more details
				</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// withRouter to allow history on stateless component
// export default Results;
export default withRouter( Results );
