import styled from 'styled-components';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';


    
    const Navigator = styled.div`
    
        list-style: none;
        display: flex;
        flex-flow: row nowrap;

       
        a{
            padding: 18px 10px;
        }

        @media (max-width: 768px) {
            flex-flow: column nowrap;
            background-color: #000;
            position: fixed;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;

            a{
                color:#fff;
            }

        }
    
    `;

    export const RightNav = ({ open }) => {

    return (
            <Navigator open={open}>
                <Link  to={'/'}>Inicio</Link>
                <Link  to={'/category/pelocorto'}>Gatito Pelo Corto</Link>
                <Link  to={'/category/pelolargo'}>Gatito Pelo Largo</Link>
                <CartWidget />
            </Navigator>
    )
}