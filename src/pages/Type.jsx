import React from 'react';

function Brands() {
  const nameLocalStorage = localStorage.getItem('name');

  return (
    <div>
      <h2>
        { `Bem-vindo, ${nameLocalStorage}.
          Escolha o tipo de veículo que deseja consultar` }
      </h2>
        <label htmlFor="">
          Selecione:
          <select name="type" id="type">
            <option value="teste">teste</option>
          </select>
        </label>
    </div>
  )
}

export default Brands;
