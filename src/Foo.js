import React from 'react';
import Bar from './Bar'

const Foo = (props) => (
  <div className="Foo box">
    <div>Foo</div>
    { props.children || <Bar hasSpecialFeatures={props.left} /> }
  </div>
)

export default Foo
