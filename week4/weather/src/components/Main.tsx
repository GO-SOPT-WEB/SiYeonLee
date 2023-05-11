import { styled } from "styled-components";
import { useState } from "react";

function Main() {
  const [cityName, setCityName] = useState("");

  const handelCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCityName = e.target.value;
    console.log(newCityName);
    setCityName(newCityName);
  };

  const handleButtonClick = () => {
    clearSearchBox();
  };

  const clearSearchBox = () => {
    setCityName("");
  };

  return (
    <Div>
      <Input
        placeholder="type city name here"
        type="text"
        value={cityName}
        onChange={handelCityChange}
      ></Input>
      <Button onClick={handleButtonClick}>Search</Button>
    </Div>
  );
}

export default Main;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 30px;
  padding-top: 50px;
  background-color: papayawhip;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 0;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  background-color: #ffc4ff;
`;
