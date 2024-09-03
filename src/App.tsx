import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content">
      Hello React 19 <span>{count}</span>
      <button onClick={() => setCount(prev => prev +1)} >Click</button>
    </div>
  );
}

export default App;
