import styled from 'styled-components';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartImg = styled.div`
display:flex;
align-self: center;

@media (max-width: 768px) {
color:white;
align-self:flex-start;
}

`;



    export const CartWidget = () => {

    return (
            <CartImg>
<FontAwesomeIcon icon={faShoppingCart} />
            </CartImg>
    )
}