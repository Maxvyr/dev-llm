import React, { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(60); // 60 seconds countdown

  useEffect(() => {
    // Exit early when we reach 0
    if (!timeLeft) return;

    // Save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // Add timeLeft as a dependency to re-run the effect when we update it
  }, [timeLeft]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-2xl font-semibold">Countdown Timer</div>
        <div className="text-6xl font-bold text-blue-500">
          {new Date(timeLeft * 1000).toISOString().substr(14, 5)}
        </div>
      </div>
    </div>
  );
};

export default Timer;
