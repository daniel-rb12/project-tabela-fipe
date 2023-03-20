import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Years() {
  const [year, setIsYear] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const vehicle = localStorage.getItem('vehicle');
  const brand = localStorage.getItem('brand');
  const model = localStorage.getItem('model');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${brand}/modelos/${model}/anos`

  const { data, isLoading } = useFetch(url);

  const navigate = useNavigate();

  const handleClickSave = () => {
    localStorage.setItem('year', year);
    navigate('/infos');
  };

  useEffect(() => {
    if (year.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [year]);

  if (isLoading) return <h1>Carregando...</h1>
  return (
    <div>
      <form>
        <h2>
          Por vez, escolha o ano do veículo.
        </h2>
        <label htmlFor="years">
          Selecione:
          <select
            name="years"
            id="years"
            onChange={ ({ target }) => setIsYear(target.value) }
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

export default Years;
