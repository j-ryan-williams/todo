import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 100px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

const News = styled.div`
  border-radius: 5px;
  background-color: rgba(0,0,0,.3);
  width: 40%;
  height: inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.p`
  font-family: Lato;
  margin-bottom: 10px;
  font-size: 13px;
`
const LinkURL = styled.a`
  font-family: Lato;
  font-weight: 100;
  text-decoration: none;
  color: white;
  font-size: 13px;
  width: inherit;
  text-align: center;
  width: 70%;
`

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      link: ''
    };
  }

componentDidMount() {
  axios.get("https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=9122e296ad66404dace4f8716c8819fc")
    .then((res) => {
      this.setState({
        title: res.data.articles[0].title,
        content: res.data.articles[0].description,
        link: res.data.articles[0].url
      })
    }).catch((error) => {
      console.log(error);
    });
}

  render() {
    return (
      <FooterContainer>
        <News>
          <Title>{this.state.title}</Title>
          <LinkURL href={this.state.link}>{this.state.content}</LinkURL>
        </News>
      </FooterContainer>
    );
  }

}

export default Footer;
