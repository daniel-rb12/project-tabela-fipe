import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useHandleClickSave from '../hooks/useHandleClickSave';
import '../css/years.css';

function Years() {
  const [year, setIsYear] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const vehicle = localStorage.getItem('vehicle');
  const brand = localStorage.getItem('brand');
  const model = localStorage.getItem('model');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${brand}/modelos/${model}/anos`

  const { data, isLoading } = useFetch(url);
  const { handleClickSave } = useHandleClickSave('year', year, '/infos');

  useEffect(() => {
    if (year.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [year]);

  if (isLoading) return <h1>Carregando...</h1>
  return (
    <form className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-white text-center" id="h2-years">
        Agora, escolha o ano do veículo.
      </h2>
      <label htmlFor="years">
        <select
          className="form-select form-select-sg" aria-label=".form-select-sm example"
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
        className="btn btn-primary btn-sg mb-2 mt-3"
        type="button"
        onClick={ handleClickSave }
        disabled={ isDisabled }
      >
        Enviar
      </button>
      <button
        className="btn btn-secondary btn-sg"
        type="button"
        onClick={ () => navigate('/models') }
      >
        Voltar
      </button>
    </form>
  )
}

export default Years;
