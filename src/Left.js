import React from 'react';
import Foo from './Foo'

const Left = (props) => (
  <div className="Left box">
    <div>Left</div>
    { props.children || <Foo left={props.leftIsSpecial} /> }
  </div>
)

export default Left
