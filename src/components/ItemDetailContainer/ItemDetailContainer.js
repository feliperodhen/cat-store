import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import styled from 'styled-components';
import { useParams } from 'react-router';


const CargandoPromesa = styled.p`
text-align:center;
`;

export const ItemDetailContainer = () => {

    const { id } = useParams();

    const [ItemShow, setItemShow] = useState();


   

    useEffect(() => {
        const itemsDetails = [{
            id: '1', 
            name: "British Shorthair", 
            category: "pelocorto",
            imgUrl: "https://cdn2.thecatapi.com/images/v104en-YP.jpg",
            temperament:  "Loyal"},
            {
              id: '2', 
              name: "Nebelung", 
              category: "pelolargo",
              imgUrl: "https://cdn2.thecatapi.com/images/GwRBXx7-w.jpg",
              temperament:  "Shy"}
        ]
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemsDetails)
            }, 2000)
        })

        getItem.then(item => setItemShow(item))
    }, []);

    return (

<>
        {
           ItemShow  ? (
               ItemShow.filter(item => item.id === id)
                .map((ItemShow) =>  (
                <ItemDetail item={ItemShow} />
             ))
             ) : <CargandoPromesa>cargando gatitos...</CargandoPromesa>
         }
         </>
    )
}