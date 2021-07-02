import React from 'react';
import { Item } from '../Item/Item';

export const ItemList = ({items, category})  => {
  return (
    <>
    {
       typeof items !== "string" ? (
         items.filter(item => item.category === category || category === undefined)
        .map((e) =>  (
           <Item item={e}/>
        ))
        ) : <p>{items}</p>
    }
    </>
  ); 
}