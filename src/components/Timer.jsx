// React importation
import React, { useEffect, useState } from 'react';

// Style importation
import "../style/timer.css";

function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
    
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
    }, []);

    // // useEffect(() => {
    // //     const interval = setInterval(changeCounter, 60);

    // //     return(() => {
    // //         clearInterval(interval);
    // //     });
    // // }, []);

    // function changeCounter() {
    //     setSeconds((second) => second -1 );
    // };

    // // Quand le compteur arrive à zéro, une alerte se déclenche
    // useEffect(() => {
    //     if (seconds === 0) {
    //         alert("Veuillez boucler vos ceinture, décollage imminent !")
    //     }
    // }, [seconds]);


    return (
        <div className='timer'>
            <p>Countdown to lift off</p>
            <div className='timer__clock'>
                <span className='timer__clock-numbers'>{days}</span>
                <span>:</span>
                <span className='timer__clock-numbers'>{hours}</span>
                <span>:</span>
                <span className='timer__clock-numbers'>{minutes}</span>
                <span>:</span>
                <span className='timer__clock-numbers'>{seconds}</span>
            </div>
            <button className="btn" type="reset">Reset timer</button>
        </div>
    );
}

export default Timer; 