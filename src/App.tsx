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
  const [step, setStep] = useState(1);

  const date = new Date("Sept 2 2024");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div className="step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count:{count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today Is "
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
