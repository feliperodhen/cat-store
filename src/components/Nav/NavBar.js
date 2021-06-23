import styled from "styled-components";
import { BurgerNav } from "./BurgerNav";
import logo from "../../assets/img/cat-paw.svg";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid palevioletred;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  .logo {
    padding: 15px 0;
    width: 40px;
  }

  p {
    padding: 15px 15px;
    font-weight: 600;
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <img src={logo} className="logo" />
        <p>cat-store</p>
      </Logo>
      <BurgerNav />
    </Nav>
  );
};
