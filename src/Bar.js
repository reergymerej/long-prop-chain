import React from 'react';
import Baz from './Baz'

const Bar = (props) => (
  <div className="Bar box">
    <div>Bar</div>
    { props.children || <Baz hasSpecialFeatures={props.hasSpecialFeatures} /> }
  </div>
)

export default Bar
