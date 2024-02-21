import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
const Timer: React.FC<{ expiryTimestamp: any; reset: boolean,setOnExpire:Function,setReset:Function  }> = ({
  expiryTimestamp,
  reset,
  setOnExpire,
  setReset
}) => {
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
        setOnExpire(true); // Set onExpire to true directly
    },
  });
  useEffect(() => {
      restart(expiryTimestamp);
  }, [reset]);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
