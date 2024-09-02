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
        <span>Step {step}</span>
        <button>+</button>
      </div>
    </div>
  );
}
