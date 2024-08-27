import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import Profile from "../../assets/WhatsApp Image 2024-07-30 at 11.58.50_b4276ce2.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


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
         <a href="/contact">
         <button>
              Contact Me <main>●</main>{" "}
              <span>
                <MdArrowOutward />
              </span>
            </button>
         </a>

            <Link
              to={"https://github.com/JbMichael890"}
              style={{ textDecoration: "none" }}
            >
              <nav>
                <FaGithub />
              </nav>
            </Link>
            <Link
              to={"https://linktr.ee/jbmichael"}
              style={{ textDecoration: "none" }}
            >
              <nav>
                <SiLinktree />
              </nav>
            </Link>
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
    }
  }
`;
const TextHold = styled.div`
  h1 {
    color: white;
    font-size: 40px;
    @media (max-width: 600px) {
      font-size: 35px;
    }
    @media (max-width: 450px) {
      font-size: 32px;
    }
    @media (max-width: 400px) {
      font-size: 30px;
    }
  }
  p {
    color: #ddd;
    @media (max-width: 600px) {
      br {
        display: none;
      }
    }
  }
`;
const LogoHold = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
  }
  button {
    @media (max-width: 500px) {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    span {
      display: none;

      @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        height: 40px;
        width: 40px;
        color: #eee;
        background-color: #0a0a0a;
        border-radius: 20px;
      }
    }
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
    font-size: 22px;
  }
  main {
    font-weight: 900;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
