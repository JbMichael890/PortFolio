import styled from "styled-components";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
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
            <Call>
              <nav><FiPhoneCall/></nav>
            </Call>
           <Fb> <nav><FaFacebook/></nav></Fb>
          <Git>
          <nav>
              <FaGithub />
            </nav>
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
        <button>SUBMIT</button>
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
  }
  p {
    font-size: 18px;
    display: flex;
    @media (max-width: 500px) {
      font-size: 16.9px;
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
    margin: 0px 10px;
    color: #d3e97a;
    font-size: 30px;
  }
`;
const InputHold = styled.div`
  width: 45%;
  /* flex-wrap: wrap; */
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
background-color: red;
  
`
const ButtonHold = styled.div`
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
    @media (max-width: 500px) {
      /* margin-left: 70px; */
    }
  }
  
`
const Git = styled.div``
const Twitter = styled.div``
const Insta = styled.div``
const Call = styled.div``