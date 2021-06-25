import React from 'react';
import { Item } from './Item/Item';

export const ItemList = ({items})  => {
  return (
    <>
    {
       typeof items !== "string" ? (
        items.map((e) =>  (
           <Item item={e}/>
        ))
        ) : <p>{items}</p>
    }
    </>
  ); 
}