"use client";
import React, { useState, useRef } from "react";
// style files
import "../auth.css";
import Timer from "@/components/common/timer/timer";
const Otp: React.FC<{ header: string }> = ({ header }) => {
  const numberOfDigits = 6;
  const [otpValues, setOtpValues] = useState(
    new Array(numberOfDigits).fill("")
  );
  const [reset, setReset] = useState<boolean>(false);
  const [onExpire, setOnExpire] = useState<boolean>(false);

  const otpBoxReference = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(0, 1);
    setOtpValues(newOtpValues);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackspaceAndEnter = (e: any, index: number) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && !e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const fullOtpCode = otpValues.join("");
    console.log(fullOtpCode);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);
  return (
    <div className='form'>
      <h1 className='heading-text'>{header}</h1>
      <Timer
        expiryTimestamp={time}
        reset={reset}
        setOnExpire={setOnExpire}
        setReset={setReset}
      />
      {onExpire && <button onClick={() => setReset(true)}>reset</button>}
      <form>
        <div className='flex justify-center items-center'>
          {otpValues.map((item, index) => (
            <input
              key={index}
              id={`${index}`}
              value={otpValues[index]}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference: any) =>
                (otpBoxReference.current[index] = reference)
              }
              type='number'
              maxLength={1}
              className='otp-input mx-2 text-center'
            />
          ))}
        </div>
        <button className='submit-button' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Otp;
