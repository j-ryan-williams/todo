import React, {Component} from 'react';
import axios from 'axios';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      temp_f: '',
      img: '',
      url: ''
    }
  }

  componentDidMount() {
    axios.get('http://api.wunderground.com/api/fb584612894f7438/conditions/q/UT/Salt_Lake_City.json').then((res) => {
      this.setState({
        city: res.data.current_observation.display_location.city,
        temp_f: res.data.current_observation.temp_f,
        image: res.data.current_observation.icon_url
      })
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="Weather">
        <div className="Weather-Container">
          <h1 className="Weather-Title">Weather</h1>
          <div>
            <h1>{this.state.city}</h1>
            <h1>{this.state.temp_f}</h1>
            <img className="Weather-Icon" src={this.state.image} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather;
