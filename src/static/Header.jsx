import { MdOutlineMenu } from "react-icons/md";
import SideBar from "./SideBar";
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <MainNav to="/">
              <nav>Home</nav>
            </MainNav>
            <MainNav to="/project">
              <nav>Project</nav>
            </MainNav>
            <MainNav to="/about">
              <nav>About</nav>
            </MainNav>
            <MainNav to="/contact">
              <nav>Contact</nav>
            </MainNav>
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
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
  }
`;
const MainNav = styled(NavLink)`
  color: #fff;

  &.active {
    color: rgb(37 99 235);
  }
`;
