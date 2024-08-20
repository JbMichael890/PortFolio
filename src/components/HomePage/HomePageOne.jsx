import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import Profile from "../../assets/WhatsApp Image 2024-07-30 at 11.58.50_b4276ce2.jpg";

const HomePageOne = () => {
  return (
    <Container>
      <Wrapper>
        <TextHold>
          <h1>
            HI, I AM <br /> AKINYELE MICHAEL.
          </h1>
          <p>
            A Sydney based front-end developer passionate about building <br />
            accessible and user friendly websites.
          </p>
          <LogoHold>
            <button>
              Contact Me <main>●</main>
            </button>
            <nav>in</nav>
            <nav>
              <FaGithub />
            </nav>
          </LogoHold>
        </TextHold>
        <ImgHold>
          <img src={Profile} alt="" />
        </ImgHold>
      </Wrapper>
    </Container>
  );
};

export default HomePageOne;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`;
const ImgHold = styled.div`
  margin-top: 20px;
  img {
    width: 300px;
    border-radius: 10px;
    @media (max-width: 500px) {
      width: 100%;
      /* height: 500px; */
    }
  }
`;
const TextHold = styled.div`
  h1 {
    color: white;
    font-size: 40px;

    @media (max-width: 600px) {
      font-size: 39px;
    }
  }
  p {
    color: #ddd;
  }
`;
const LogoHold = styled.div`
  display: flex;
  align-items: center;
  button {
    height: 45px;
    width: 135px;
    border-radius: 25px;
    border: none;
    font-weight: 550;
    cursor: pointer;
    margin-right: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #d3e97a;
    font-size: 15px;
  }
  nav {
    color: #d3e97a;
    margin: 0px 5px;
    height: 50px;
    width: 50px;
    background-color: #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 25px;
  }
  main {
    font-weight: 900;
  }
`;
