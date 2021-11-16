import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <div>
      <section className="section-center">
        <h3>Tired of boring lorem ipsum?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil?{" "}
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
