import { styled } from "styled-components";

interface WeatherProps {
  weatherImageUrl: string;
  weatherImageALt: string;
  temp: number;
  feelLike: number;
  minTemp: number;
  maxTemp: number;
  clouds: number;
  date?: string;
  name?: string;
}

function WeatherCard({
  weatherImageUrl,
  weatherImageALt,
  temp,
  feelLike,
  minTemp,
  maxTemp,
  clouds,
  date,
  name,
}: WeatherProps) {
  console.log("card");
  return (
    <Card>
      <Title>
        {date}
        {name}
      </Title>
      <Image src={weatherImageUrl} alt={weatherImageALt} />
      <Text>Temperature: {temp}℃</Text>
      <Text>Feels Like: {feelLike}℃</Text>
      <Text>Min Temperature: {minTemp}℃</Text>
      <Text>Max Temperature: {maxTemp}℃</Text>
      <Text>Clouds: {clouds}%</Text>
    </Card>
  );
}

export default WeatherCard;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17.5em;
  height: fit-content;
  padding: 0.9em;
  border-radius: 1em;
  background-color: white;
  box-shadow: 1em 1em skyblue;
`;
const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;

const Image = styled.img`
  width: 6.5em;
  height: 6.5em;
`;

const Text = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
`;
