import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { RiDownload2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

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
              <main>
                I'm a junior front-end developer specializing in creating
                user-friendly and <br />
                visually appealing websites and applications using HTML, CSS,
                JavaScript, <br />
                and other front-end technologies. My skills include:
              </main>
              <br />
              <body>
                - Building responsive and mobile-friendly interfaces
                <br />
                - Writing clean, efficient, and well-documented code
                <br />
                - Collaborating with designers and back-end developers to bring
                ideas to life
                <br />
                -Troubleshooting and debugging issues
                <br />- Staying up-to-date with the latest front-end trends and
                technologies
              </body>
              <br />
              <br />
              <br />
              <main>
                I'm excited to continue learning and growing as a developer, and{" "}
                <br /> I'm always looking for new challenges and opportunities
                to improve my skills!. <br /> While i am not programming, i
                enjoy playing Basketball, Listening <br />
                to Music and Photography. Learning more to improve skills.
              </main>
            </p>
          </TextOne>
          <LogoHold>
            <button>
              DOWNLOAD RESUME <main>●</main>{" "}
              <span>
                <RiDownload2Line />
              </span>
            </button>
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
  min-height: 90vh;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 85%;
  @media (max-width: 945px) {
    align-items: center;
  }
  h1 {
    font-size: 50px;
  }
`;
const TextHold = styled.div`
  @media (max-width: 450px) {
    width: 100%;
  }
  br {
    @media (max-width: 600px) {
      /* display: none; */
    }
  }
`;
const TextOne = styled.div`
  nav {
    font-size: 29px;
    @media (max-width: 890px) {
      font-size: 24px;
    }
    @media (max-width: 500px) {
      font-size: 22px;
    }
    @media (max-width: 400px) {
      font-size: 18px;
    }
    br {
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
  main {
    br {
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
`;
const LogoHold = styled.div`
  display: flex;
  align-items: center;
  button {
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
      @media (max-width: 400px) {
        font-size: 17px;
        height: 29px;
        width: 29px;
        border-radius: 20px;
      }
    }
    @media (max-width: 500px) {
      width: 225px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media (max-width: 450px) {
      font-size: 13px;
    }
    @media (max-width: 400px) {
      font-size: 10px;
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
// opportunities. Has <br />
// MechanicalEngineering background. Likes to focus on accessibility
// when developing. <br /> Passionate and curious about solving
// problems. Currently, i"m exploring Reactjs, <br /> Webflow and a
// bit of Designing. While i am not programming, i enjoy playing
// Basketball, <br /> Listening to Music and Photography. Learning
// more to improve skills
