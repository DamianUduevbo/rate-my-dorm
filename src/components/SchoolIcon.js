import React from 'react';

const SchoolIcon = (props) => {
  return <div>
      <img src={props.image} alt={props.name + ".png"} />
      <div>{props.name}</div>
  </div>
};

export default SchoolIcon;
