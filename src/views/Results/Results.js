import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div className="container">
        {/* {console.log(this.props.location.state)} */}
        <h1>Here you are!</h1>
        <div className="row">
          {
            // below is where the cards can be adjusted for each result
          }
          {this.props.location.state.map((business) => (
            <div key={business._id} className="col-12 col-md-6 card">
              <img alt="yes" src={business.imageUrl}></img>
              <div className="card-body">
                <h5 className="card-title">{business.name}</h5>
                <p className="card-text">{business.description}</p>
                <a
                  href={business.businessUrl}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Visit {business.name}'s website!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
