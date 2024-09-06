import styled from "styled-components";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import Swal from "sweetalert2";

const Footer = () => {
  const alertUser = () => {
    Swal.fire({
      title: "Update Coming",
      text: "The detail page is not yet available",
      icon: "info",
    });
  };
  return (
    <Containee>
      <Wrapper>
        <TextOne>
          <h1>LET'S CONNECT</h1>
          <p>
            Say hello at
            <span>
              michaelakinyele833@gmail.com <hr />
            </span>
          </p>
          <main>
            For more info, here's my
            <span>
              resume <hr />
            </span>
          </main>

          <LogoHold>
            <a href="09058118114">
              <Call>
                <nav>
                  <FiPhoneCall />
                </nav>
              </Call>
            </a>
            <a href="https://web.facebook.com/mickey.frosh.39948">
              <Fb>
                {" "}
                <nav>
                  <FaFacebook />
                </nav>
              </Fb>
            </a>
            <Git>
              <a href="https://github.com/JbMichael890">
                <nav>
                  <FaGithub />
                </nav>
              </a>
            </Git>
            <Twitter>
              <nav>
                <FaXTwitter />
              </nav>
            </Twitter>
            <Insta>
              <nav>
                <GrInstagram />
              </nav>
            </Insta>
          </LogoHold>
        </TextOne>

        <InputHold>
          <HoldOne>
            <main>Name</main>
            <input type="text" />
          </HoldOne>
          <HoldTwo>
            <main>Email</main>
            <input type="text" />
          </HoldTwo>
          <HoldThree>
            <main>Subject</main>
            <input type="text" />
          </HoldThree>
          <HoldFour>
            <main>Message</main>
            <textarea role="1" />
          </HoldFour>
          <ButtonHold>
            <button onClick={alertUser}>SUBMIT</button>
          </ButtonHold>
        </InputHold>
      </Wrapper>
    </Containee>
  );
};

export default Footer;
const Containee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: #ddd;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-wrap: wrap;
  width: 85%;
`;
const TextOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  h1 {
    font-size: 50px;
    @media (max-width: 500px) {
      font-size: 40px;
    }
    @media (max-width: 450px) {
      font-size: 38px;
    }
    @media (max-width: 400px) {
      font-size: 35px;
    }
  }
  p {
    font-size: 18px;
    display: flex;
    @media (max-width: 500px) {
      font-size: 15.5px;
    }
    @media (max-width: 400px) {
      font-size: 13px;
    }
  }
  main {
    font-size: 18px;
    display: flex;
    margin-top: -19px;
  }
  span {
    margin-left: 5px;
    hr {
      border: 1px solid #d3e97a;
      margin-top: -4px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const LogoHold = styled.div`
  display: flex;
  align-items: center;
  margin: 35px 0px;
  cursor: pointer;
  nav {
    color: #25810e;
    font-size: 20px;
  }
`;
const InputHold = styled.div`
  width: 45%;
  @media (max-width: 500px) {
    width: 100%;
  }
  input {
    background-color: #1a1a1a;
    outline: none;
    border: none;
    height: 55px;
    width: 100%;
    border-radius: 5px;
    color: #eee;
    font-size: 17px;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  main {
    margin: 10px 0px;
  }
`;
const HoldOne = styled.div``;
const HoldTwo = styled.div``;
const HoldThree = styled.div``;
const HoldFour = styled.div`
  textarea {
    background-color: #1a1a1a;
    outline: none;
    border: none;
    height: 200px;
    width: 100%;
    border-radius: 5px;
    color: #eee;
    font-size: 15px;
    resize: vertical;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
const Fb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #f5f8fc;
  transition: all 350ms;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: #007bb6;
  }
`;
const ButtonHold = styled.div`
 :hover {
      transform: scale(1.01);
      transition: all 400ms;
    }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 50px;
    width: 150px;
    border-radius: 24px;
    font-weight: 600;
    font-size: 16px;
    background-color: #d3e97a;
    border: none;
    margin-top: 30px;
    cursor: pointer;
   
  }
`;
const Git = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #f5f8fc;
  transition: all 350ms;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: #32ccfe;
  }
`;
const Twitter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #f5f8fc;
  transition: all 350ms;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: #fdcc91;
  }
`;
const Insta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #f5f8fc;
  transition: all 350ms;
  cursor: pointer;
  &:hover {
    background-color: #ec4a89;
  }
`;
const Call = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #f5f8fc;
  transition: all 350ms;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: #3a589b;
    color: white;
  }
`;
