import React from 'react';
import './SideDrawerButton.css';

const SideDrawerButton = (props) => (
  <button className='button' onClick={props.click}>
    <div className='button-line' />
    <div className='button-line' />
    <div className='button-line' />
  </button>
);

export default SideDrawerButton;
