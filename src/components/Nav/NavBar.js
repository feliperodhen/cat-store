import styled from 'styled-components';
import { BurgerNav } from './BurgerNav';


    
    const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid palevioletred;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0;
    }
    `;
    export const NavBar = () => {


    return (
        <Nav>
            <div className="logo">
                cat-store
            </div>
            <BurgerNav /> 
        </Nav>
    )
}