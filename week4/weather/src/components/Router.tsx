import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { weatherImage } from "../assets/weatherImage";
import styled from "styled-components";
import Main from "./Main";
import Error from "./Error";
import WeatherCard from "./WeatherCard";
import WeatherInfo from "../interfaces/WeatherInfo.interface";
import FiveDayWeatherInfo from "../interfaces/FiveDayWeatherInfo.interface";

function Router() {
  const [searchType, setSearchType] = useState("daily");
  const [oneDayResponse, setOneDayResponse] = useState<WeatherInfo | null>(
    null
  );
  const [fiveDayResponse, setFiveDayResponse] =
    useState<FiveDayWeatherInfo | null>(null);

  const filteredFiveDayResponse = fiveDayResponse?.list?.filter(
    (_, index) => (index - 2) % 8 === 0
  );

  const weatherCard = (() => {
    if (searchType === "daily") {
      if (oneDayResponse === null) {
        return <P>Type city name to see the weather</P>;
      }

      return (
        <WeatherCard
          weatherImageUrl={
            weatherImage.find(
              (v) => v.description === oneDayResponse.weather[0].description
            )?.imgURL ?? ""
          }
          weatherImageALt={oneDayResponse.weather[0].description}
          temp={oneDayResponse.main.temp}
          feelLike={oneDayResponse.main.feels_like}
          minTemp={oneDayResponse.main.temp_min}
          maxTemp={oneDayResponse.main.temp_max}
          clouds={oneDayResponse.clouds.all}
          date={oneDayResponse.dt_txt}
          name={oneDayResponse.name}
        />
      );
    } else if (searchType === "weekly") {
      if (filteredFiveDayResponse === undefined) {
        return <P>Type city name to see the weather</P>;
      }

      return (
        <>
          {filteredFiveDayResponse.map((eachDay) => (
            <WeatherCard
              weatherImageUrl={
                weatherImage.find(
                  (v) => v.description === eachDay.weather[0].description
                )?.imgURL ?? ""
              }
              weatherImageALt={eachDay.weather[0].description}
              temp={eachDay.main.temp}
              feelLike={eachDay.main.feels_like}
              minTemp={eachDay.main.temp_min}
              maxTemp={eachDay.main.temp_max}
              clouds={eachDay.clouds.all}
              date={eachDay.dt_txt}
            />
          ))}
        </>
      );
    }
  })();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              searchType={searchType}
              setSearchType={setSearchType}
              oneDayResponse={oneDayResponse}
              setOneDayResponse={setOneDayResponse}
              fiveDayResponse={fiveDayResponse}
              setFiveDayResponse={setFiveDayResponse}
            />
          }
        >
          <Route path="/:searchType">
            <Route path=":cityName" element={weatherCard} />
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
        <Route path=":searchType" element={<Error />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

const P = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8em;
`;
