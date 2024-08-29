import styled from "styled-components";

const HomePageSix = () => {
  return (
    <Container>
      <Wrapper>
<a href="/project">
<button>VIEW MORE PROJECTS</button>
</a>
      </Wrapper>
    </Container>
  );
};

export default HomePageSix;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 20px;
  width: 85%;
  button {
    height: 45px;
    width: 200px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    background-color: #d3e97a;
  }
`;
