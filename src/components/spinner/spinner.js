import React from 'react';
import './spinner.css';

const Spinner = () => (
  <div className="ui segment spinner-wrapper">
    <p></p>
    <div className="ui active inverted dimmer">
      <div className="ui loader"></div>
    </div>
</div>
)

export default Spinner;