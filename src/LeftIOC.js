import React from 'react';
import Foo from './Foo'
import Bar from './Bar'
import Baz from './Baz'
import Quux from './Quux'

const LeftIOC = (props) => (
  <div className="Left box">
    <div>LeftIOC</div>
    <Foo>
      <Bar>
        <Baz>
          <Quux hasContextualOption={props.leftIsSpecial} />
        </Baz>
      </Bar>
    </Foo>
  </div>
)

export default LeftIOC
