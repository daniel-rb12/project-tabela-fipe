import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Models() {
  const [model, setIsModel] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const vehicle = localStorage.getItem('vehicle');
  const brand = localStorage.getItem('brand');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${brand}/modelos`

  const { data, isLoading } = useFetch(url);

  const navigate = useNavigate();

  const handleClickSave = () => {
    localStorage.setItem('model', model);
    navigate('/years');
  };

  useEffect(() => {
    if (model.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [model]);

  if (isLoading) return <h1>Carregando...</h1>
  return (
    <div>
      <form>
        <h2>
          Desta vez, escolha o modelo do veículo.
        </h2>
        <label htmlFor="models">
          Selecione:
          <select
            name="models"
            id="models"
            onChange={ ({ target }) => setIsModel(target.value) }
          >
            <option value="">Selecione uma opção...</option>
            { data.modelos.map((option) => (
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

export default Models;
