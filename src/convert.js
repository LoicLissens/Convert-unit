import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./output.css";

function TempInput(props) {
  const unite = props.unite === "c" ? "Celsius" : "Fahrenheit";
  const cssInput = "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal";
  const handleTempChange = (e) => {
    if (isNaN(parseInt(e.target.value)) && e.target.value !== "-" && e.target.value !== "") {
      return;
    }
    props.onTempChange(e.target);
  };
  return (
    <div>
      <label htmlFor={unite.toLocaleLowerCase()}>{unite}</label>
      <input onChange={handleTempChange} value={props.val} className={cssInput} name={unite.toLocaleLowerCase()} type="text" />
    </div>
  );
}
const celToFar = (cel) => {
  return isNaN(cel) ? "" : cel * (9 / 5) + 32;
};
const FarTocel = (far) => {
  return isNaN(far) ? "" : (far - 32) * (5 / 9);
};

function Convert() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(celToFar(celsius));

  const tempChange = (targetEvent) => {
    if (targetEvent.value === "") {
      setCelsius("");
      setFahrenheit("");
      return;
    }
    if (targetEvent.name === "celsius") {
      setCelsius(targetEvent.value);
      setFahrenheit(celToFar(targetEvent.value));
    } else {
      setCelsius(FarTocel(targetEvent.value));
      setFahrenheit(targetEvent.value);
    }
  };
  return (
    <>
      <h1>Le bon convertisseur</h1>
      <TempInput onTempChange={tempChange} val={celsius} unite={"c"} />
      <TempInput onTempChange={tempChange} val={fahrenheit} unite={"f"} />
    </>
  );
}

const Myapp = () => {
  return (
    <div className="container mx-auto px-4">
      <Convert />
    </div>
  );
};
ReactDOM.render(<Myapp />, document.getElementById("root"));
