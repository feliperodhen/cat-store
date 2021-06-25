import React, { useState, useEffect } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'



export const ItemListContainer = () => {
        const [gatos, setGatos] = useState("buscando gatitos...");
        useEffect(() => {
            const items = [{
                id: '1', 
                name: "British Shorthair", 
                imgUrl: "https://cdn2.thecatapi.com/images/v104en-YP.jpg",
                temperament:  "Loyal"},
                {
                  id: '2', 
                  name: "Nebelung", 
                  imgUrl: "https://cdn2.thecatapi.com/images/GwRBXx7-w.jpg",
                  temperament:  "Shy"}
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
        <>
            <ItemList items={gatos}/>
            <ItemCount stock={5} initial={1} onAdd/>
            
        </>
    )
}



