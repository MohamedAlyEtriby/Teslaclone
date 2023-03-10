import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Section({
  title,
  description,
  backgroundimg,
  leftButton,
  rightButton,
}) {
  return (
    <Wrap bgImg={backgroundimg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" ></DownArrow>
        </Buttons>
      </Fade>
    </Wrap>
  );
  }

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index:0;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 1;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.87;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin-right: 10px;
  &:hover{
    color:white;
    background-color: #111;
  }
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: #111;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animationDown infinite 1.5s;
  text-align: center;
  width: 50px;
`;
const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
