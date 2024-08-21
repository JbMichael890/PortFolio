import styled from "styled-components";

const AboutPageFour = () => {
  return (
    <Contaner>
      <Wrapper>
        <h1>MY EXPERIENCE</h1>
        <TextHold>
          <TextOne>
            <main>Freelance Developer </main>
            <p>Aug 2024- Present</p>
          </TextOne>
          <Hold>
            <p>
              Ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute
              irure <br />
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla <br />
              pariatur
            </p>
          </Hold>
          <Bottom>
            <Front>
              <nav>Front-End Intern</nav>
              <p>Apr 2024-Aug 2024</p>
            </Front>
            <main>JB Tech</main>
            <p>
              Ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute
              irure <br />
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla <br />
              pariatur
            </p>
          </Bottom>
        </TextHold>
      </Wrapper>
    </Contaner>
  );
};

export default AboutPageFour;
const Contaner = styled.div`
  background-color: black;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  width: 85%;

  h1 {
    font-size: 50px;
    /* inline-size: 1px; */
    @media (max-width: 500px) {
      font-size: 42px;
    }
  }
`;
const TextHold = styled.div`
  p {
    font-size: 20px;
    @media (max-width: 500px) {
      font-size: 100%;
      br {
        display: none;
      }
    }
  }
`;
const TextOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    display: grid;
    p {
      margin-top: -2px;
    }
  }
  main {
    font-size: 25px;
  }
`;
const Hold = styled.div``;
const Bottom = styled.div`
  main {
    font-size: 18px;
    font-weight: 500;
    color: #d3e97a;
    br {
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;
const Front = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    display: grid;
    p {
      margin-top: -2px;
    }
  }
`;
// const Bottom = styled.div``
