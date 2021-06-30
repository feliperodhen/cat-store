import React from 'react';
import styled from 'styled-components';
import { ItemCount } from '../ItemCount/ItemCount'

const DivCard = styled.div`
text-align:center;

`;

const Imgcard = styled.img`
width:20%;
`;

export const ItemDetail = ({item})  => {
console.log("dsadsa", item)
    function alertGatitos (){
        alert("gatitos agregados a la canasta")
      }

      


  return (
        <DivCard key={item.id}>
            <Imgcard src={item.imgUrl} />
            <p>Name: {item.name }</p>
            <p>Temperament: {item.temperament }</p>
            <ItemCount stock={5} initial={1} onAdd={alertGatitos} />
            
        </DivCard>
  ); 
}