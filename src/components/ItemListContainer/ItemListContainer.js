import { ItemCount } from '../ItemCount/ItemCount';
export const ItemListContainer = (props) => {


    return (
        <>
        <ItemCount stock={5} initial={1} onAdd />
        <h3>Bienvenidos a {props.title}</h3>
       </>
    )
}