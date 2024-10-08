import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import Image from "../../assets/Screenshot 2024-08-20 035249.png";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HomePageTwo = () => {
  return (
    <Container>
      <Wrapper>
        <HolderOne>
          <h1>FEATURED PROJECTS</h1>
          <p>
            Here are some of the selected projects that showcase my passion for{" "}
            <br />
            front-end development
          </p>
          <CardHold>
            <ButtonHold>
              <button>Conceptual Work</button>
            </ButtonHold>
            <ImgHold>
              <img src={Image} alt="" />
            </ImgHold>
          </CardHold>
        </HolderOne>
        <TextHold>
          <TextOne>
            <nav>
              Promotional landing page for our <br />
              favorite show
            </nav>
            <p>
              Teamed up with a designer to breathe life into a promotional
              webpage <br /> for our beloved show,Adventure Time. Delivered a
              fully responsive <br />
              design with dynamic content capabilities, seamlessly integrating a{" "}
              <br /> newsletter feature to keep fans updated with the latest
              adventures.
            </p>
          </TextOne>
          <TextTwo>
            <HoldOne>
              <nav>PROJECT INFO</nav>
              <hr />
            </HoldOne>
            <HoldTwo>
              <Year>
                <main>Year</main>
                <main>2023</main>
              </Year>
              <hr />
            </HoldTwo>
            <HoldThree>
              <Role>
                <main>Role</main>
                <main>Front-end Developer</main>
              </Role>
              <hr />
            </HoldThree>
          </TextTwo>
          <TextThree>
            <Logo>
              <Link
                to={"https://movie-app-txtr.vercel.app"}
                style={{
                  textDecoration: "none",
                }}
              >
                <nav>
                  {" "}
                  LIVE DEMO <HiOutlineArrowUpRight />
                </nav>
              </Link>

              <hr />
            </Logo>

            <LogoTwo>
              <Link
                to={"https://github.com/JbMichael890/Movie-App"}
                style={{
                  textDecoration: "none",
                }}
              >
                <nav>
                  SEE ON GITHUB <FaGithub />
                </nav>
              </Link>
              <hr />
            </LogoTwo>
          </TextThree>
        </TextHold>
      </Wrapper>
    </Container>
  );
};

export default HomePageTwo;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: #fff;
`;
const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;
const HolderOne = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 45px;
    @media (max-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 500px) {
      font-size: 35px;
    }
    @media (max-width: 400px) {
      font-size: 30px;
    }
    @media (max-width: 380px) {
      font-size: 28px;
    }
  }
  br {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const CardHold = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 400px;
  width: 500px;
  background-color: #222222;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 350px;
    height: 230px;
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
const TextHold = styled.div``;
const TextOne = styled.div`
  nav {
    font-size: 32px;
    @media (max-width: 450px) {
      font-size: 28px;
    }
    @media (max-width: 400px) {
      font-size: 26px;
    }
    @media (max-width: 350px) {
      font-size: 25px;
    }
  }
  p {
    font-size: 18px;
    color: #ddd;
    @media (max-width: 550px) {
      font-size: 15px;
    }
  }
  br {
    @media (max-width: 550px) {
      display: none;
    }
  }
`;
const HoldOne = styled.div``;
const HoldTwo = styled.div``;
const Role = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
  margin-right: 10px;

  nav {
    font-weight: 500;
    color: #d3e97a;
  }
  hr {
    width: 100px;
    margin-top: 1px;
    border: 1px solid #d3e97a;
  }
`;
const HoldThree = styled.div``;
const TextThree = styled.div`
  display: flex;
  align-items: center;
  margin: 45px 0px;
  cursor: pointer;
  h4 {
    margin-bottom: -5px;
  }
  nav {
    font-weight: 500;
    color: #d3e97a;
  }
`;
const Year = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextTwo = styled.div`
  main {
    font-weight: 500;
    margin: 10px 0px;
  }
`;
const ButtonHold = styled.div`
  margin-left: 15px;
  button {
    height: 30px;
    width: 130px;
    border-radius: 18px;
    border: none;
    color: white;
    background-color: black;
    cursor: pointer;
    @media (max-width: 500px) {
      margin-top: 10px;
    }
  }
`;
const ImgHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 450px;
    border-radius: 5px;
    margin-top: -70px;
    object-fit: cover;
    @media (max-width: 600px) {
      width: 300px;
    }
  }
`;
const LogoTwo = styled.div`
  margin-left: 10px;
  font-weight: 500;
  color: #d3e97a;
  hr {
    border: 1px solid #d3e97a;
    margin-top: 1px;
  }
`;
