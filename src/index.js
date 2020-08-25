import React, { useState, useMemo, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import "./output.css";

function wait(time) {
  const t = Date.now();
  while (true) {
    if (Date.now() - t > time) {
      return true;
    }
  }
}
const Button = React.memo(({ onClick }) => {
  console.log(useState(0));
  return (
    <button onClick={onClick} className="font-bold py-2 px-4 rounded bg-blue-500 text-white">
      Mon boutton
    </button>
  );
});
function LittleForm() {
  const input = useRef(null);
  const compt = useRef({ lol: 1 });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(compt.current);
  };
  return (
    <form>
      <label htmlFor="lol">LOL</label>
      <input
        ref={input}
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="text"
        name="lol"
      />
      <button onClick={handleClick} className="font-bold py-2 px-4 rounded bg-blue-500 text-white">
        Click me Salope
      </button>
    </form>
  );
}
const App = () => {
  const [count, setCount] = useState(0);
  /*const handleClick = useMemo(function () {
    return function () {
      alert("lol");
    };
  }, []);*/
  //OR
  const handleClick = useCallback(function () {
    alert("lol");
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={handleClick} />
      <h2>Count : {count}</h2>

      <button onClick={() => setCount((c) => c + 1)} className="font-bold py-2 px-4 rounded bg-blue-500 text-white">
        incr
      </button>
      <LittleForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
