import { styled } from "styled-components";
import { useState } from "react";
import axios from "axios";
import WeatherInfo from "../interfaces/WeatherInfo.interface";
import FiveDayWeatherInfo from "../interfaces/FiveDayWeatherInfo.interface";

function Main() {
  const [cityName, setCityName] = useState("");
  const [searchType, setSearchType] = useState("daily");
  const [response, setResponse] = useState<
    WeatherInfo | null | FiveDayWeatherInfo
  >(null);

  const handelSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handelCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCityName = e.target.value;
    setCityName(newCityName);
  };
  const handleButtonClick = () => {
    if (searchType === "daily") {
      axios
        .get<WeatherInfo>(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((r) => {
          setResponse(r.data);
        });
    } else if (searchType === "weekly") {
      axios
        .get<FiveDayWeatherInfo>(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((r) => {
          setResponse(r.data);
        });
    }

    console.log({ cityName });
    clearSearchBox();
  };

  const clearSearchBox = () => {
    setCityName("");
  };

  return (
    <Div>
      <div>{JSON.stringify(response)}</div>
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
      <div></div>
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
