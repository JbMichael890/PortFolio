import styled from "styled-components";

const AboutPageThree = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>MY CAPABILITIES</h1>
        </Header>
        <TextHold>
          <Text>
            <p>
              I am always looking to add more skills. Morbi egestas neque eu
              blandit <br /> fermentum. Nulla ac lobortis ligula. Pellentesque
              ac ex at purus faucibus <br />
              trisque ut et dolor.
            </p>
          </Text>
          <Card>
            <CardOne>
              <nav>HTML</nav>
            </CardOne>
            <CardTwo>
              <nav>CSS</nav>
            </CardTwo>
            <CardThree>
              <nav>JAVASCRIPT</nav>
            </CardThree>
            <CardFour>
              <nav>REACT</nav>
            </CardFour>
            <CardTwelve>
              <nav>REACTJS</nav>
            </CardTwelve>
            <CardFive>
              <nav>SWEATALERT</nav>
            </CardFive>
            <CardSix>
              <nav>FIGMA</nav>
            </CardSix>
            <CardSeven>
              <nav>REACT-ROUTER-DOM</nav>
            </CardSeven>
            <CardEight>
              <nav>STYLED-COMPONENT</nav>
            </CardEight>
            <CardNine>
              <nav>FIREBASE</nav>
            </CardNine>
            <CardTen>
              <nav>SLICK-CAROUSEL</nav>
            </CardTen>
            <CardEleven>
              <nav>REACT-ICONS</nav>
            </CardEleven>
          </Card>
        </TextHold>
      </Wrapper>
    </Container>
  );
};

export default AboutPageThree;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: #eee;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
  flex-wrap: wrap;
  margin-top: 30px;
  h1 {
    font-size: 40px;
    @media (max-width: 600px) {
      font-size: 50px;
    }
    @media (max-width: 500px) {
      font-size: 40px;
    }
    @media (max-width: 450px) {
      font-size: 38px;
    }
    @media (max-width: 400px) {
      font-size: 33px;
    }
  }
`;
const TextHold = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Text = styled.div`
  p {
    @media (max-width: 500px) {
      br {
        display: none;
      }
    }
  }
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  nav {
    font-size: 15px;
    font-weight: 500;
  }
`;
const CardOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 90px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 12px 10px;
`;
const CardTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 90px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 10px 10px;
`;
const CardThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 120px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 10px 10px;
`;
const CardFour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 90px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 10px 10px;
`;
const CardFive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 120px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 10px 10px;
`;
const CardSix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 90px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 10px 10px;
`;
const CardSeven = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 180px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 12px 10px;
`;
const CardEight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 180px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 12px 12px;
`;
const Header = styled.div`
  width: 30%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const CardNine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 100px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 12px 12px;
`;
const CardTen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 150px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 12px 12px;
`;
const CardEleven = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 120px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 12px 12px;
`;
const CardTwelve = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 120px;
  color: #ddd;
  border-radius: 25px;
  border: 1px solid #ddd;
  margin: 10px 10px;
`;
