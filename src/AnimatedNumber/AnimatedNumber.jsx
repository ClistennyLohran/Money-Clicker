import { useRef, useState, useEffect } from "react";

function AnimatedNumber({ value = 0.00, duration = 250, formatValue }) {

  const [ number, setNumber ] = useState(value);

  const prevValue = usePrevious(value) || 0.00;
  
  useEffect(() => {
    let startTimestamp = null;
  
    function step(timestamp) {
      if(!startTimestamp) {
        startTimestamp = timestamp;
      }
  
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  
      if(formatValue !== null && formatValue !== undefined) {
        setNumber(formatValue((progress * (value - prevValue) + prevValue)));
      } else {
        setNumber((progress * (value - prevValue) + prevValue));
      }
      
      if(progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }, [value]);

  return number;
}

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default AnimatedNumber;