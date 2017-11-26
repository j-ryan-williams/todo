import React, { Component } from 'react';
import axios from 'axios';

import {
  NewsContainer, News,
  Title, LinkURL
} from './styled/NewsStyled';

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
      <NewsContainer>
        <News>
          <Title>{this.state.title}</Title>
          <LinkURL className="hover" href={this.state.link}>{this.state.content}</LinkURL>
        </News>
      </NewsContainer>
    );
  }

}

export default Footer;
