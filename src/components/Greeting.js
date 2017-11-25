import React, { Component } from 'react';
import styled from 'styled-components';

const GreetingContainer = styled.div`
  font-family: Lato;
  display: flex;
  align-items: center;
  height: 25px;
  font-weight: 100;
  font-size: 30px;
  padding-bottom: 15px;
  line-height: normal;
`

class Greeting extends Component {
  render() {
    let today = new Date();
    let hrs = today.getHours();
    let greet;
    let name = 'Ryan'

    if (hrs < 12) {
      greet = 'Good morning,'
    } else if (hrs >= 12 && hrs <= 17) {
      greet = 'Good afternoon, '
    } else if (hrs >= 18) {
      greet = 'Good evening, '
    }
    return(
      <GreetingContainer>
        <p>{greet} {name}</p>
      </GreetingContainer>
    )
  }
}

export default Greeting;
