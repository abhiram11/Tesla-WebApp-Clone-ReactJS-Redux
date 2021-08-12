import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      Header
      <a href="#">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      <MenuGroup>
        <div>Model S</div>
        <div>Model 3</div>
        <div>Model X</div>
        <div>Model Y</div>
      </MenuGroup>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div``;

const MenuGroup = styled.div``;
const RightMenu = styled.div``;
