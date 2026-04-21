import { useState, useEffect, useRef } from 'react';
import { Button } from '../shared';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="text-5xl font-mono font-bold text-gray-900 mb-6">
        {formatTime(seconds)}
      </div>
      
      <div className="flex gap-3 justify-center">
        {!isRunning ? (
          <Button onClick={handleStart}>Start</Button>
        ) : (
          <Button variant="secondary" onClick={handleStop}>Stop</Button>
        )}
        <Button variant="outline" onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}

export default Timer;