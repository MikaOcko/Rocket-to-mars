// React importation
import React, { useEffect, useState } from 'react';

// Style importation
import "../style/timer.css";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("TOTO");
    }, []);

    return (
        <div className='timer'>
            <p>Countdown to lift off</p>
            <div className='timer__clock'>
                <span className='timer__clock-numbers'>0</span>
                <span>:</span>
                <span className='timer__clock-numbers'>{seconds}</span>
            </div>
            <button className="btn" type="reset">Reset timer</button>
        </div>
    );
}

export default Timer; 