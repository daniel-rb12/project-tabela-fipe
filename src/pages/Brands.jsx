import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Brands() {
  const [brand, setIsBrand] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const vehicle = localStorage.getItem('vehicle');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas`;

  const { data, isLoading } = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    if (brand.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [brand]);

  const handleClickSave = () => {
    localStorage.setItem('brand', brand);
    navigate('/models');
  };

  if (isLoading) return <h1>Carregando...</h1>
  return (
    <div>
      <form>
        <h2>
          Agora, escolha a marca do veículo.
        </h2>
        <label htmlFor="brands">
          Selecione:
          <select
            name="brands"
            id="brands"
            onChange={ ({ target }) => setIsBrand(target.value) }
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
        <button
          type="button"
          onClick={ handleClickSave }
          disabled={ isDisabled }
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Brands;
