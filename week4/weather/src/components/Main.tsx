import { styled } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "../interfaces/WeatherInfo.interface";
import FiveDayWeatherInfo from "../interfaces/FiveDayWeatherInfo.interface";
import { Outlet, useNavigate } from "react-router-dom";

interface StateProps {
  searchType: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
  oneDayResponse: WeatherInfo | null;
  setOneDayResponse: React.Dispatch<React.SetStateAction<WeatherInfo | null>>;
  fiveDayResponse: FiveDayWeatherInfo | null;
  setFiveDayResponse: React.Dispatch<
    React.SetStateAction<FiveDayWeatherInfo | null>
  >;
}

function Main({
  searchType,
  setSearchType,
  setOneDayResponse,
  setFiveDayResponse,
}: StateProps) {
  const [cityName, setCityName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

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
          setOneDayResponse(r.data);
          navigate(`/daily/${cityName}`);
        });
    } else if (searchType === "weekly") {
      axios
        .get<FiveDayWeatherInfo>(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((r) => {
          setFiveDayResponse(r.data);
          navigate(`/weekly/${cityName}`);
        });
    }

    console.log({ cityName });
    clearSearchBox();
  };

  const clearSearchBox = () => {
    setCityName("");
  };

  return (
    <MainBox>
      {/* <div>{JSON.stringify(response)}</div> */}
      <InputBox>
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
      </InputBox>
      <CardBox>
        <CardSection>
          <Outlet />
        </CardSection>
      </CardBox>
    </MainBox>
  );
}

export default Main;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  background-color: papayawhip;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Select = styled.select`
  width: 120px;
  height: 2em;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 12.5em;
  height: 2em;
  border-radius: 0.6em;
`;

const Button = styled.button`
  padding: 0;
  width: 5em;
  height: 2em;
  border-radius: 0.9em;
  background-color: #ffc4ff;
`;

const CardSection = styled.section`
  display: flex;
  gap: 1.5em;
`;
