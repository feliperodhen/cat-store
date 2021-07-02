import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Imgcard = styled.img`
width:20%;
`;

const CardItem = styled.div`
text-align:center;
`;

export const Item = ({item})  => {
  const { id, name, imgUrl} = item;

  return (
        <CardItem key={id}>
            <Imgcard src={imgUrl} />
            <p>Name: {name }</p>
            <Link to={'/item/' + id}>Ver detalle</Link>
        </CardItem>
  ); 
}