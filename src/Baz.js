import React from 'react';
import Quux from './Quux'

const Baz = (props) => (
  <div className="Baz box">
    <div>Baz</div>
    { props.children || <Quux hasContextualOption={props.hasSpecialFeatures} /> }
  </div>
)

export default Baz
