import React from 'react';
import Foo from './Foo'
import Bar from './Bar'
import Baz from './Baz'
import Quux from './Quux'

const RightIOC = () => (
  <div className="Right box">
    <div>RightIOC</div>
    <Foo>
      <Bar>
        <Baz>
          <Quux />
        </Baz>
      </Bar>
    </Foo>
  </div>
)

export default RightIOC
