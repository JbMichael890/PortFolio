import styled from "styled-components";

const ContactOne = () => {
  return (
    <Container>
      <Wrapper>
        <h1>PhoneNum:+234 9058 118 114</h1>
      </Wrapper>
    </Container>
  );
};

export default ContactOne;
const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
