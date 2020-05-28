import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    document.getElementById('searchInputForm').name = document.getElementById('search').value;
    e.target.reset();
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
