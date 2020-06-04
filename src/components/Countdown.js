import React from 'react';
import { useState, useEffect } from 'react'
import moment from 'moment'

const dateTarget = moment().add(3, 'days');


const Countdown = () => {
    const [dateNow, setDateNow] = useState(moment());
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDateNow(moment());
        }, 1000)
        return () => {
            clearTimeout(timerId);
        }
    })

    const countdown = moment.duration(dateTarget.diff(dateNow));
    const countdownMessage = `${countdown.days()} Days, ${countdown.hours()}:${countdown.minutes()}:${countdown.seconds()}`;
    return (
        <>
            <p className="lead text-center">{countdownMessage} until the registration for next doubles night opens.</p>
            <p className="lead text-center">
                <a className="btn btn-primary btn-lg disabled" href="body" role="button">Register Here</a>
            </p>
        </>
    );
}

export default Countdown;
