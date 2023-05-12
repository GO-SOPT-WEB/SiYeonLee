import { styled } from "styled-components";

function Error() {
  return (
    <Section>
      <Text>Something went wrong ☹️</Text>
      <Text>Check the city name</Text>
    </Section>
  );
}

export default Error;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: papayawhip;
`;

const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  color: #fd7760;
`;
