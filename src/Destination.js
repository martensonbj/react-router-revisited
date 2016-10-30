import React from 'react';

let backgroundStyle = {
  color: 'red',
  backgroundColor: 'purple'
}

const Destination = (props) => {
  return (
    <div className="Destination">
      <h2>Destination Page!</h2>
      <p style={backgroundStyle}> You have selected
        <span> {props.params.destination}</span>
      </p>
    </div>
  );
}

export default Destination;
