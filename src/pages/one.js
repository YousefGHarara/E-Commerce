import React from 'react';
import Two from './two';

const One = (props) => {
  return (
    <div >
      <Two friends={props.title}/>
    </div>
  );
}

export default One;
