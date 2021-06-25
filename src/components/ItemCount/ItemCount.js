import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonAgregar = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  :disabled {
    border: 2px solid grey;
    color: grey;
}
:enabled{
  cursor: pointer;
}

`;


const Contador = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  

  h1 {
  font-size: 2rem;
}

.button__wrapper {
  display: flex;
  gap: 1rem;

  & > * {
    border: none;
    background-color: white;
    box-shadow: 0px 0px 10px gray;
    font-weight: bold;
    font-size: 1rem;
    color: inherit;
    border-radius: 50%;
    outline: none;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;

    &:hover {
      background-color: gray;
    }

    &:active {
      transform: scale(0.9);
    }

    &:focus {
      box-shadow: 0 0 0 3px gray;
    }
  }
}

.positive {
  color: pink;
  animation: pulse 500ms ease-in-out;
 
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

`;


export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0);

    return (
        <Contador>
        <h1 className={count > 0 ? "positive" : false}>
          {count}
        </h1>
        <div className="button__wrapper">
          <button disabled={count === 0} onClick={() => setCount(count - 1)}>-</button>
          <button disabled={count === stock} onClick={() => setCount(count + 1)}>+</button>
        </div>
        <ButtonAgregar disabled={count < initial} onClick={()=> onAdd()}>Agregar al carrito</ButtonAgregar>
      </Contador>
    );
  };