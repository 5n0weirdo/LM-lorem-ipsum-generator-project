import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  return (
    <div>
      <section className="section-center">
        <h3>Tired of boring lorem ipsum?</h3>
      </section>
    </div>
  );
}

export default App;
