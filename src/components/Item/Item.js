import React from 'react';
import styled from 'styled-components';

const Imgcard = styled.img`
width:20%;
`;

export const Item = ({item})  => {


  return (
        <div key={item.id}>
            <Imgcard src={item.imgUrl} />
            <p>Name: {item.name }</p>
        </div>
  ); 
}