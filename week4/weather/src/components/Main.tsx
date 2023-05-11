import { styled } from "styled-components";
import { useState } from "react";

function Main() {
  const [cityName, setCityName] = useState("");
  const [searchType, setSearchType] = useState("daily");

  const handelSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handelCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCityName = e.target.value;
    // console.log(newCityName);
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
      <Select onChange={handelSearchTypeChange} value={searchType}>
        <option value="daily">Daily Weather</option>
        <option value="weekly">Weekly Weather</option>
      </Select>
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

const Select = styled.select`
  width: 120px;
  height: 30px;
  border-radius: 5px;
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
