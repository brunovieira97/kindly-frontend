import React, { Component } from 'react'

import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div class-name="SearchBar">
        <input type="text" className="SearchBar-input" placeholder="Pesquisar..." />
      </div>
    )
  }

}

export default SearchBar;