import React, { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import styled from 'styled-components';
import { useParams } from 'react-router';

const GatitosDiv = styled.div`
text-align:center;
`;


export const ItemListContainer = () => {

const { id } = useParams()

        const [gatos, setGatos] = useState("buscando gatitos...");
        useEffect(() => {
            const items = [{
                id: '1', 
                name: "British Shorthair", 
                category: "pelocorto",
                imgUrl: "https://cdn2.thecatapi.com/images/v104en-YP.jpg"},
                {
                  id: '2', 
                  name: "Nebelung", 
                  category: "pelolargo",
                  imgUrl: "https://cdn2.thecatapi.com/images/GwRBXx7-w.jpg"}
            ]
        const getGatos = new Promise((resolve, reject) => {
            setTimeout(function(){ 
              resolve(items)
            }, 2000);
          })

          getGatos.then((cat)=> {
            setGatos(cat)
          }, err => {
            console.log("error")
          })
        
      }, []);

    return(
        <GatitosDiv>
           
            <ItemList items={gatos} category={id}/>
        </GatitosDiv>
    )
}



