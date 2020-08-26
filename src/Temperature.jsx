import React, { useState } from "react";
import { Container, FormInput, Row, Col } from "shards-react";

function TempInput(props) {
  const unite = props.unite === "c" ? "Celsius" : "Fahrenheit";
  const handleTempChange = (e) => {
    if (isNaN(parseInt(e.target.value)) && e.target.value !== "-" && e.target.value !== "") {
      return;
    }
    props.onTempChange(e.target);
  };
  return (
    <div>
      <label htmlFor={unite.toLowerCase()}>{unite}</label>
      <FormInput onChange={handleTempChange} value={props.val} name={unite.toLowerCase()} type="text" />
    </div>
  );
}
const celToFar = (cel) => {
  return isNaN(cel) ? "" : cel * (9 / 5) + 32;
};
const FarTocel = (far) => {
  return isNaN(far) ? "" : (far - 32) * (5 / 9);
};

function Temperature() {
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
    <Container>
      <Row>
        <Col xs={6}>
          <TempInput onTempChange={tempChange} val={celsius} unite={"c"} />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <TempInput onTempChange={tempChange} val={fahrenheit} unite={"f"} />
        </Col>
      </Row>
    </Container>
  );
}
export default Temperature;
