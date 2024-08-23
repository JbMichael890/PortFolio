
import styled from 'styled-components'
import Swal from "sweetalert2";


const SideBar = () => {
  const alertUser = () => {
    Swal.fire({
      title: "Update Coming",
      text: "The detail page is not yet available",
      icon: "info",
    });
  }
  return (
    <Container>
        <Wrapper>
        <NameHold>
          <h3>Akinyele Michael</h3>
        </NameHold>

        <Holder>
         <a href="/">
         <nav>Work</nav>
         </a>
         <a href="/about">
         <nav>About</nav>

         </a>
          <nav onClick={alertUser}>Contact</nav>
        </Holder>
        </Wrapper>
    </Container>
  )
}

export default SideBar
const Container = styled.div`
  display: flex;
  justify-content: flex-end;`
const Wrapper = styled.div`
background-color: #1c1c1f;
  height: 65vh;
  width: 200px;
  color: indigo;
  font-weight: 800;
  nav {
    color: #ddd;
    cursor: pointer;
    font-weight: 500;
    margin-left: 10px;
    transition: all 350ms;
    &:hover {
      color: #ffcbd4;
    }
  }
  a {
    text-decoration: none;
  }
`
const NameHold = styled.div``
const Holder = styled.div`
`
