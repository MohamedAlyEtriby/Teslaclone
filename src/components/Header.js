import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "react-reveal/Slide";
function Header() {
  const [close, setclose] = useState(false);
  function closeslide() {
    setclose(false);
  }
  function setclose1(){
    setclose(true);
  }
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menuu>
        <a>Model S</a>
        <a>Model3</a>
        <a>Model X</a>
        <a>Model Y</a>
      </Menuu>
      <RightMenu>
        <a href=""> Shop</a>
        <a href=""> Tesla Account</a>
        <CustomMenu onClick={setclose1}/>
      </RightMenu>
      {close && (
        <BurgerNav>
          <Close onClick={closeslide} />
          <li>
            <a href="">Existing inventory</a>
          </li>
          <li>
            <a href="">Used inventory</a>
          </li>
          <li>
            <a href="">Trade-in</a>
          </li>
          <li>
            <a href="">Cybertruck</a>
          </li>
          <li>
            <a href="">Roadaster</a>
          </li>
          <li>
            <a href="">Roadaster</a>
          </li>{" "}
          <li>
            <a href="">Roadaster</a>
          </li>{" "}
          <li>
            <a href="">Roadaster</a>
          </li>
        </BurgerNav>
      )}
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
  background-color: white;
`;
const Menuu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 5px;

    &:hover{
      border-bottom: 2px solid;
      cursor: pointer;
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-content: center;
  a {
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  z-index: 10;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 99;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  transition:0.4s all;
  li {
    padding: 15px 0;
    border-bottom: 1px solid black;
  }
  a {
    font-weight: 700;
  }
`;
const Close = styled(CloseIcon)`
  position: absolute;
  right: 0;
  top: 5px;
  cursor: pointer;
`;
