import React, { useState } from "react";

function HookCounterTwo() {
  const innitialCount = 0;
  const [count, setCount] = useState(innitialCount);

const incremantFive = () => {
    for(let i = 0; i< 5; i++) {
        setCount(PrevCount => PrevCount + 1)
    }
}

  return (
    <div>
      count: {count} 
      <button onClick={() => setCount(innitialCount)}>Reset</button> 
      <button onClick={() =>   setCount(PrevCount => PrevCount + 1)}>Increment</button>
      <button onClick={() =>   setCount(PrevCount => PrevCount - 1)}>Decrement</button>
      <button onClick={incremantFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
