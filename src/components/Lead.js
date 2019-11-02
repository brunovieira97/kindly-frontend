import React from 'react';
import logo from '../assets/logo.png';

import './Lead.css'

function Lead() {
  return (
    <div className='Lead'>
      <img src={logo} alt='Kindly Logo' className='Lead-img'></img>
    </div>
  )
}

export default Lead;