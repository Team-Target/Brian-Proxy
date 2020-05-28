import React, { Component } from "react";
import Axios from "axios";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      cartNum: 0
    };

    this.getAllItems = this.getAllItems.bind(this);
  }
  
  componentDidMount() {
    //get items on initial render
    this.getAllItems();
 
    document.addEventListener('addToCart', () => {
      this.setState({cartNum: this.state.cartNum + 1})
    })
  }

  getAllItems() {
    Axios.get('http://targaryenstore-env.eba-pcr3t8nd.us-east-2.elasticbeanstalk.com/api/items')
    .then((res) => {
      console.log('from Axios GET request: ', res);
      this.setState({
        items: res.data
      });
    })
    .catch((err) => console.log('problem with Axios GET request: ', err));
  }

  render() {
    return (
      <div>
        <Header cartNum={this.state.cartNum}/>
      </div>
    );
  }
}
