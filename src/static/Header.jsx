import { MdOutlineMenu } from "react-icons/md";
import SideBar from "./SideBar";
import styled from "styled-components";
import { useState } from "react";


const Header = () => {
  // const alertUser = () => {
  //   Swal.fire({
  //     title: "Update Coming",
  //     text: "The detail page is not yet available",
  //     icon: "info",
  //   });
  const [toggle, setToggle] = useState(false);
  

  const getToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <NameHold>
            <h3>Akinyele Michael</h3>
          </NameHold>

          <Holder>
            <a href="/">
              <nav>Home</nav>
            </a>
            <a href="/project">
            <nav>Project</nav></a>
            <a href="/about">
              <nav>About</nav>
            </a>
           <a href="/contact">
           <nav>Contact</nav></a>
          </Holder>
        </Wrapper>
        <Sidenav onClick={getToggle}>
          <MdOutlineMenu />
        </Sidenav>
      </Container>
      {toggle ? <SideBar /> : null}
    </div>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
`;
const NameHold = styled.div``;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  nav {
    margin: 0px 10px;
    color: white;
    cursor: pointer;
    font-weight: 500;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const Sidenav = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    font-size: 25px;
    cursor: pointer;
  }`
  