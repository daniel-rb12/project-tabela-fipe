import React from 'react';
import useFetch from '../hooks/useFetch';

function Brands() {  
  const vehicle = localStorage.getItem('vehicle');
    
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas`;

  const { data, isLoading } = useFetch(url);

  if (isLoading) return <h1>Carregando...</h1>
  return (
    <div>
      <form>
        <label htmlFor="brands">
          Selecione:
          <select
            name="brands"
            id="brands"
          >
            <option value="">Selecione uma opção...</option>
            { data.map((option) => (
              <option
                key={ option.codigo }
                value={ option.codigo }
              >
                { option.nome }
              </option>
            )) }
          </select>
        </label>
      </form>
    </div>
  )
}

export default Brands;
