import styled from "styled-components"
import Background from "../../assets/WhatsApp Image 2024-07-30 at 11.58.50_b4276ce2.jpg"

const AboutPageTwo = () => {
  return (
  <Container>
<Wrapper>

</Wrapper>
  </Container>
  )
}

export default AboutPageTwo
const Container = styled.div`
   width: 100%;
    /* min-height: 100vh; */
background-color: black;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper = styled.div`
 background-image: url(${Background});
    width: 85%;
    height: 700px;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    border-radius: 15px;
margin-top: 30px;
@media (max-width: 600px) {
    height: 300px;
    width: 99%;
}
`