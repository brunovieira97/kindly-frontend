import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
  render() {
    return (
      <div className='Item'>
        {this.props.text}
      </div>
    )
  }
}

export default Item;