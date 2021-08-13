import React from "react";
import styled from "styled-components";

function Section(props) {
  return (
    <Container bgImage={props.backgroundImg}>
      <ItemText>
        <h1>{props?.title}</h1>
        <p>{props?.description}</p>
      </ItemText>
      <ButtonGroup
        onClick={() => {
          alert("Coming Soon!  Till then try clicking on Menu Icon!");
        }}
      >
        <LeftButton>{props?.leftBtnText}</LeftButton>
        <RightButton>{props?.rightBtnText}</RightButton>
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" />
    </Container>
  );
}

export default Section;

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  flex-grow: 1;

  h1 {
    padding-bottom: 10px;

    animation: fade2 0.5s ease-in;

    @keyframes fade2 {
      0% {
        // opacity: 0;
        transform: translateY(35%);
      }
    }
  }

  p {
    animation: fade3 0.5s ease-in;

    @keyframes fade3 {
      0% {
        opacity: 0;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
  animation: fade 0.9s ease-in;

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translate(-15%);
    }
  }
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
  animation: fade1 0.9s ease-in;

  @keyframes fade1 {
    0% {
      opacity: 0;
      transform: translate(15%);
    }
  }
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 50px;
`;
