import React, {useEffect, useState} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {

    const [ItemShow, setItemShow] = useState();


    const itemsDetails = [{
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

    useEffect(() => {
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
                ItemShow.map((ItemShow) =>  (
                <ItemDetail item={ItemShow} />
             ))
             ) : <p>cargando productos...</p>
         }
         </>
    )
}