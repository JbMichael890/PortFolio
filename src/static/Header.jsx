import { MdOutlineMenu } from "react-icons/md";
import SideBar from "./SideBar";
import styled from "styled-components";
import { useState } from "react";

const Header = () => {
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
              <nav>Work</nav>
            </a>
            <a href="/about">
              <nav>About</nav>
            </a>
            <nav>Contact</nav>
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
    font-weight: 500;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
const Sidenav = styled.div`
  display: none;
  @media (max-width: 450px) {
    display: flex;
    font-size: 25px;
    cursor: pointer;
  }`
  