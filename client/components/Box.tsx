import React from 'react';

const Box = (props: any) => {
  return (
    <div className="LLbox">
      <div className="box">
        {props.data === 'null' &&
          <div id="null" />}
        {props.data}
      </div>
      {props.data !== 'null' &&
        <div className="arrow">
          →
        </div>
      }
    </div>
  );
};

export default Box;