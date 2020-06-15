import React from 'react';
import Countdown from 'components/Countdown';

const RegistrationJumbotron = () => {
  return (
    <div className="jumbotron  jumbotron-fluid my-4 p-4">
      <div className="container">
        <h1 className="display-4 text-center">BTC Doubles Night</h1>
        <hr className="my-4" />
        <Countdown />
      </div>
    </div>
  );
};

export default RegistrationJumbotron;
