import type { Component } from "solid-js";
import { add, Counter } from "solid-iconify";

const App: Component = () => {
  console.log(add(1, 2));
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
