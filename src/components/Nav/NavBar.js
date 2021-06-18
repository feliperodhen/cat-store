import styled from 'styled-components';
import { BurgerNav } from './BurgerNav';
import { CartWidget } from './CartWidget';


    
    const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid palevioletred;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    `;
    export const NavBar = () => {


    return (
        <Nav>
            <CartWidget />
            <BurgerNav /> 
        </Nav>
    )
}