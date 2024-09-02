function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;

function Counter() {
  return (
    <div>
      <div className="step">
        <button>-</button>
        <span>Step:</span>
        <button>+</button>
      </div>

      <div className="count">
        <button>-</button>
        <span>Count: </span>
        <button>+</button>
      </div>
    </div>
  );
}
