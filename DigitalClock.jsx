import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer); 
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM"; 

    hours = hours % 12 || 12;

    // Add leading zeros
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <h1>{formatTime()}</h1>
      </div>
    </div>
  );
}

export default DigitalClock;
