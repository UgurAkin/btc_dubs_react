import React from 'react';
import Countdown from './Countdown';

const ContentHeader = () => {
  return (
    <div id="ContentHeader" className="row justify-content-center">
      <div className="col-9">
        <div className="jumbotron  jumbotron-fluid my-4">
          <div className="container">
            <h1 className="display-4 text-center">BTC Doubles Night</h1>
            <hr className="my-4" />
            <Countdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
