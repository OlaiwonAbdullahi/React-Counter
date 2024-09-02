import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  return (
    <div>
      <div className="step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="count">
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span>Count:{count} </span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}
