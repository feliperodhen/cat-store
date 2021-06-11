import styled from 'styled-components';


    
    const Ul = styled.ul`
    
        list-style: none;
        display: flex;
        flex-flow: row nowrap;

        li{
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

            li{
                color:#fff;
            }

        }
    
    `;

    export const RightNav = ({ open }) => {

    return (
            <Ul open={open}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Gatos</a></li>
                <li><a href="#">Contacto</a></li>
            </Ul>
    )
}