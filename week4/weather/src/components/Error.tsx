import { styled } from "styled-components";

function Error() {
  return (
    <Section>
      <Text>Something went wrong ☹️</Text>
      <Text>Check the URL</Text>
    </Section>
  );
}

export default Error;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fe9987;
  padding-top: 2em;
`;

const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  color: white;
  margin: 0;
`;
