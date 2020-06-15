import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';

const dateTarget = moment()
  .add(3, 'days')
  .add('10', 'seconds');

const Countdown = () => {
  const [dateNow, setDateNow] = useState(moment());
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDateNow(moment());
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  });

  const countdown = moment.duration(dateTarget.diff(dateNow));
  const countdownMessage = `${countdown.days()} Days, ${countdown
    .hours()
    .toString()
    .padStart(2, 0)}:${countdown
    .minutes()
    .toString()
    .padStart(2, 0)}:${countdown
    .seconds()
    .toString()
    .padStart(2, 0)}`;
  return (
    <div className="px-5 py-2">
      <p className="lead text-left">
        {countdownMessage} until the registration for next doubles night opens.
      </p>
      <p className="lead text-right">
        <a
          className="btn btn-secondary btn-lg disabled"
          href="body"
          role="button"
        >
          Register Here
        </a>
      </p>
    </div>
  );
};

export default Countdown;
