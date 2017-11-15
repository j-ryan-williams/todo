import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      temp: '',
      img: ''
    }
  }

  componentDidMount() {
    axios.get('http://api.wunderground.com/api/fb584612894f7438/conditions/q/CA/San_Francisco.json')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return(
      <div className="Weather">
        <div className="Weather-Container">
          <h1 className="Weather-Title">Weather</h1>
          <div>

          </div>
        </div>
      </div>
    )
  }
}

export default Weather;
