import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as config from '../config.js';

const Wrapper = styled.div`
  height: inherit;
  width: 15%;
`
const WeatherContainer = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width: 75px;
  height: 55px;
`
const Data = styled.div`
  text-align: center;
  padding: 0 10px;
`
const City = styled.p`
  font-family: Lato;
  font-weight: 300;
  font-size: 14px;
  padding-top: 5px;
`
const Temp = styled.p`
  font-family: Lato;
  font-weight: 100;
  font-size: 40px;
`
let apiKey = config.API_KEY;

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      state: '',
      temp_f: '',
      img: '',
      logo: ''
    }
  }

  componentDidMount() {
    axios.get('http://api.wunderground.com/api/' + apiKey + '/conditions/q/84094.json')
    .then((res) => {
      this.setState({
        city: res.data.current_observation.display_location.city,
        state: res.data.current_observation.display_location.state,
        temp_f: Math.round(res.data.current_observation.temp_f),
        image: res.data.current_observation.icon_url,
        logo: res.data.current_observation.image.url
      })
    }).catch((error) => {
      console.log(error);
    });
  }


  render() {
    return (
      <Wrapper>
        <WeatherContainer>
          <Logo src={this.state.logo} alt="" />
          <Data>
            <Temp>{this.state.temp_f}&#176;</Temp>
            <City>{this.state.city}, {this.state.state}</City>
          </Data>
        </WeatherContainer>
      </Wrapper>
    )
  }
}

export default Weather;
