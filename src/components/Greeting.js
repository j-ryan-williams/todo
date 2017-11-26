import React, { Component } from 'react';
import styled from 'styled-components';

const GreetUser = styled.p`
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
    let name = "Ryan"; //prompt("What is your name?");
    let today = new Date();
    let hrs = today.getHours();
    let greet;

    if (hrs < 12) {
      greet = 'Good morning, ' + name;
    } else if (hrs >= 12 && hrs <= 17) {
      greet = 'Good afternoon, ' + name;
    } else if (hrs >= 18) {
      greet = 'Good evening, ' + name;
    }
    return(
        <GreetUser>{greet}!</GreetUser>
    )
  }
}

export default Greeting;
