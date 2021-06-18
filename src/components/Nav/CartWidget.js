import styled from 'styled-components';
import logo from '../../assets/img/cat-paw.svg'

const CartImg = styled.div`

display: flex;
align-items: center;


.logo {
        padding: 15px 0;
        width: 40px;
    }

    p{
            padding: 15px 15px;
            font-weight: 600;
        }
`;



    export const CartWidget = () => {

    return (
            <CartImg>
                <img src={logo} className="logo" />
                <p>cat-store</p>
            </CartImg>
    )
}