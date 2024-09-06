import styled from "styled-components";
import Profile from "../../assets/WhatsApp Image 2024-07-30 at 11.58.50_b4276ce2.jpg";
const HomPageFive = () => {
  return (
    <Container>
      <Wrapper>
        <About>
          <h1>ABOUT ME</h1>
        </About>
        <Holder>
          <nav>
            I am a front-end developer based in Sydney. <br />
            Has Mechananical Engineering background.
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
              <br /> I'm always looking for new challenges and opportunities to
              improve my skills!
            </main>
          </p>
          <Icon>
            <Logo>
              <a href="/about">
                <main>MORE ABOUT ME</main>
              </a>
              <hr />
            </Logo>
          </Icon>
          <Image>
            <img src={Profile} alt="" />
          </Image>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default HomPageFive;
const Container = styled.div`
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
  width: 85%;
  margin-top: 50px;
  flex-wrap: wrap;
  h1 {
    font-size: 59px;
    letter-spacing: -3px;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
const About = styled.div``;
const Holder = styled.div`
  nav {
    font-size: 34px;
    font-weight: 450;
    @media (max-width: 890px) {
      font-size: 27px;
      br {
        display: none;
      }
    }
    @media (max-width: 500px) {
      font-size: 22px;
    }
    @media (max-width:400px) {
      font-size: 20px;
    }
    @media (max-width: 350px) {
      font-size: 18px;
    }
  }
  p {
    font-size: 18px;
    @media (max-width: 450px) {
      font-size: 17px;
    }
    @media (max-width: 400px) {
      font-size: 16px;
    }
    @media (max-width: 350px) {
      font-size: 14px;
    }
  }
  main {
    br {
      @media (max-width: 500px) {
        /* display: none; */
      }
    }
  }
  body {
    br {
      @media (max-width: 500px) {
        /* display: none; */
      }
    }

    @media (max-width: 500px) {
      /* font-size: 13px; */
    }
  }
`;
const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #d3e97a;
  flex-direction: column;
  main {
    font-weight: 500;
    color: #d3e97a;
    margin-top: 30px;
    font-size: 17px;
  }
  a {
    text-decoration: none;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  hr {
    width: 135px;
    border: 1px solid #d3e97a;
    margin-top: -0.1px;
  }
`;
const Image = styled.div`
  margin-top: 20px;
  img {
    width: 300px;
    border-radius: 10px;
    display: none;
    @media (max-width: 500px) {
      width: 100%;
      display: flex;
    }
  }
`;
