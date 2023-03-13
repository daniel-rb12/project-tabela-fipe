import React, { useState } from 'react';

function Brands() {
  const [vehicle, setVehicle] = useState('');

  const nameLocalStorage = localStorage.getItem('name');

  return (
    <div>
      <form>
        <h2>
          { `Bem-vindo, ${nameLocalStorage}.
            Escolha o tipo de veículo que deseja consultar` }
        </h2>
        <label htmlFor="">
          Selecione:
          <select
            name="type"
            id="type"
            onChange={ ({ target }) => setVehicle(target.value) }>
              <option value=''>Selecione...</option>
              <option value="carros">Carros</option>
              <option value="motos">Motos</option>
              <option value="caminhoes">Caminhões</option>
          </select>
        </label>
      </form>
    </div>
  )
}

export default Brands;
