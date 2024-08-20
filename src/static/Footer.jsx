import styled from "styled-components";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <Containee>
      <Wrapper>
        <TextOne>
          <h1>LET'S CONNECT</h1>
          <p>
            Say hello at
            <nav>
              michaelakinyele833@gmail.com <hr />
            </nav>
          </p>
          <main>
            For more info, here's my
            <nav>
              resume <hr />
            </nav>
          </main>

          <LogoHold>
            <nav>in</nav>
            <nav>
              <FaGithub />
            </nav>
            <nav>
              <FaXTwitter />
            </nav>
            <nav>
              <GrInstagram />
            </nav>
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
            <textarea  role="1"/>
          </HoldFour>
          <button>SUBMIT</button>
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
  @media (max-width: 500px) {
    /* display: grid; */
  }
`;
const TextOne = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  width: 45%;
  h1 {
    font-size: 50px;
    @media (max-width: 500px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 18px;
    display: flex;
  }
  main {
    font-size: 18px;
    display: flex;

    margin-top: -19px;
  }
  nav {
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
    margin: 0px 10px;
    color: #d3e97a;
    font-size: 25px;
  }
`;
const InputHold = styled.div`
/* background-color: red; */
width: 45%;
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
      /* width: 300px */
    } 
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
  main{
    margin: 10px 0px;
  }
`;
const HoldOne = styled.div``;
const HoldTwo = styled.div``;
const HoldThree = styled.div``;
const HoldFour = styled.div`
/* background-color: red; */
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
      /* width: 100%; */
    }
    
  }
`;
