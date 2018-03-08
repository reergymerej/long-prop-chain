import React from 'react';

const Quux = (props) => (
  <div className="Quux box">
    <div>Quux</div>
    { props.hasContextualOption &&
      <div className="special">a special thing</div>
    }
  </div>
)

export default Quux
