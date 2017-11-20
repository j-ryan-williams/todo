import React, { Component } from 'react';
import axios from 'axios';

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
      console.log(res);
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
      <div className="Footer">
        <div className="Axios-News">
          <p>{this.state.title}</p>
          <a href={this.state.link}>{this.state.content}</a>
        </div>
      </div>
    );
  }

}

export default Footer;
