import styled from "styled-components";
import HomePageTwo from "../components/HomePage/HomePageOne";
import HomePageOne from "../components/HomePage/HomePageTwo";
import HomPageFive from "../components/HomePage/HomPageFive";
import HomPageFour from "../components/HomePage/HomPageFour";
import HomPageThree from "../components/HomePage/HomPageThree";
import HomePageSix from "../components/HomePage/HomePageSix";

const Home = () => {
  return (
    <Container>
      <HomePageTwo />
      <HomePageOne />
      <HomPageThree />
      <HomPageFour />
      <HomePageSix />
      <HomPageFive />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  min-height: calc(100vh - 20vh);
  overflow-x: hidden;
  background-color: black;
`;
