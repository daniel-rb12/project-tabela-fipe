import React from 'react';

function Brands() {
  const nameLocalStorage = localStorage.getItem('name');

  return (
    <div>
      <h2>{ `Bem-vindo, ${nameLocalStorage}. Escolha ` }</h2>
    </div>
  )
}

export default Brands;
