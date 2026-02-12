import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Effect se je zagnal za:", name);

    const timer = setTimeout(() => {
      console.log("Shranjujem ime:", name);
    }, 1000);

    return () => {
      console.log("Čistim prejšnji timer za:", name);
      clearTimeout(timer);
    };
  }, [name]);

  return (
    <div className="container">
      <h1>React 84 – Cleanup pri dependency</h1>

      <input
        type="text"
        placeholder="Vpiši ime..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
