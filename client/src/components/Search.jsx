import React from "react";
import Axios from "axios";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      itemId: 1
    };

    this.search = this.search.bind(this);
    this.getItem = this.getItem.bind(this);
  }

  search(e) {
    e.preventDefault();
    let search
    console.log("searchbar input: ", document.getElementById('search').value);
    //document.getElementById('searchInputForm').name = document.getElementById('search').value;
    document.getElementById('searchInputForm').name = value;
    // this.getItem(value);
    // document.getElementById('searchInputForm').name = this.state.itemId;
    console.log(document.getElementById('searchInputForm').name);
    e.target.reset();
  }

  getItem(name) {
    Axios.get(`http://targaryenstore-env.eba-pcr3t8nd.us-east-2.elasticbeanstalk.com/api/item/${name}`)
    .then((res) => {
      console.log('from Axios GET request: ', res);
      this.setState({
        item: res.data
      });
    })
    .catch((err) => console.log('problem with Axios GET request: ', err));
  }

  render() {
    return (
      <div className="SearchInput">
        <form id="searchInputForm" name='0' onSubmit={this.search}>
          <input id="search" autoCorrect="off" autoCapitalize="off" 
          autoComplete="off" placeholder="Search">
          </input>
        </form>
      </div>
    )
  }
}

export default Search;