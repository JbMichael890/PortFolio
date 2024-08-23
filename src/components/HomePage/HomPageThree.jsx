import styled from "styled-components";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Image from "../../assets/Screenshot 2024-08-15 104522.png";
import { Link } from "react-router-dom";

const HomPageThree = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <img src={Image} alt="" />
        </Card>
        <TextHold>
          <TextOne>
            <nav>Blog site for NBA-NEWS</nav>
            <p>
              Mastered CSS Grid complexities in building an innovative news{" "}
              <br />
              homepage, navigating intricate design decisions for a seamless
              user <br /> experience. Leveraged the challenge to enhance skills
              in front-end <br />
              development.
            </p>
          </TextOne>
          <TextTwo>
            <HoldOne>
              <nav>PROJECT INFO</nav>
              <hr />
            </HoldOne>
            <ClientHold>
              <Client>
                <main>Client</main>
                <main>NBA-BLOGS</main>
              </Client>
              <hr />
            </ClientHold>
            <HoldTwo>
              <Year>
                <main>Year</main>
                <main>2024</main>
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
            <Icon>
              <Logo>
                <Link to={"https://nba-blog-237u.vercel.app"} style={{
                textDecoration: "none"
              }}>
                  <nav>
                    VIEW PROJECT <HiOutlineArrowUpRight />
                  </nav>
                </Link>
                <hr />
              </Logo>
            </Icon>
          </TextTwo>
        </TextHold>
      </Wrapper>
    </Container>
  );
};
export default HomPageThree;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: #fff;
`;
const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 600px;
  background-color: #222222;
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;
const TextHold = styled.div``;
const TextOne = styled.div`
  nav {
    font-size: 35px;
    @media (max-width: 400px) {
      font-size: 27px;
    }
  }
  p {
    font-size: 17px;
    color: #ddd;
    br {
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
`;
const HoldOne = styled.div``;
const Client = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HoldTwo = styled.div``;
const Year = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HoldThree = styled.div``;
const Role = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #d3e97a;
  flex-direction: column;
  nav {
    font-weight: 500;
    color: #d3e97a;
    margin-top: 30px;
  }
`;
const TextTwo = styled.div`
  main {
    font-weight: 500;
    margin: 10px 0px;
  }
`;
const ClientHold = styled.div``;
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  hr {
    width: 120px;
    border: 1px solid #d3e97a;
    margin-top: -0.1px;
  }
`;
