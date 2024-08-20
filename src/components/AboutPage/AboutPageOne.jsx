import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { RiDownload2Line } from "react-icons/ri";

const AboutPageOne = () => {
  return (
    <Container>
      <Wrapper>
        <h1>ABOUT ME</h1>

        <TextHold>
          <TextOne>
            <nav>
              I am a front-end developer based in Sydney. <br /> Has Mechanical
              Engineering background.
            </nav>
            <p>
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has <br />
              MechanicalEngineering background. Likes to focus on accessibility
              when developing. <br /> Passionate and curious about solving
              problems. Currently, i"m exploring Reactjs, <br /> Webflow and a
              bit of Designing. While i am not programming, i enjoy playing
              Basketball, <br /> Listening to Music and Photography. Learning
              more to improve skills
            </p>
          </TextOne>
          <LogoHold>
            <button>
              DOWNLOAD RESUME <main>●</main> <span><RiDownload2Line/></span>
            </button>
            <In><nav>in</nav></In>
            <nav>
              <FaGithub />
            </nav>
          </LogoHold>
        </TextHold>
      </Wrapper>
    </Container>
  );
};

export default AboutPageOne;
const Container = styled.div`
  background-color: black;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  min-height: 90vh;
`;
const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* align-items: center; */
  width: 85%;
  h1{
    font-size: 50px;
  }
`;
const TextHold = styled.div`
  br {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
const TextOne = styled.div`
  nav {
    font-size: 29px;
  }
  /* p{
    font-size: ;
  } */
`;
const LogoHold = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  button {
    @media (max-width: 500px) {
    width: 225px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    height: 50px;
    width: 195px;
    border-radius: 24px;
    border: none;
    
    cursor: pointer;
    margin-right: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #d3e97a;
    font-size: 15px;
    font-weight: 550;
    span{
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
    margin-bottom: 3px;
    @media (max-width: 500px) {
        display: none;
      }
  }
 
`;
const In = styled.div`
font-weight: 700;
`
