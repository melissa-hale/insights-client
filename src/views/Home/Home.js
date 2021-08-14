import React, { Component } from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";
import { config } from '../../config'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      filter: "",
    };
  }

  captureFilter = (event) => {
    if (event.target.value) {
      this.setState((s) => {
        return {
          ...s,
          filter: event.target.value,
        };
      });
    }
  };

  findBusinesses = (event) => {
    event.preventDefault();
    fetch(`${config.apiUrl}/business?filter=${this.state.filter}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState((s) => {
          return {
            ...s,
            businesses: data,
            filter: "",
          };
        });
        this.props.history.push("/results", this.state.businesses);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>
           Support Minority-Owned Today!  <br />
        </h1>
        <form autocomplete="off" onSubmit={this.findBusinesses.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="search for a business"
              id="inputField"
              onChange={this.captureFilter}
              // value={this.state.filter}
            ></input>
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Home);
