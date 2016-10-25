import React from 'react';

const Destination = (props) => {
  return (
    <div className="Destination">
      <h2>Destination Page!</h2>
      <p>You have selected
        <span> {props.params.destination}</span>
      </p>
    </div>
  );
}

export default Destination;
