import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useHandleClickSave from '../hooks/useHandleClickSave';
import Loading from '../components/Loading'
import '../css/models.css'

function Models() {
  const [model, setIsModel] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const vehicle = localStorage.getItem('vehicle');
  const brand = localStorage.getItem('brand');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${brand}/modelos`

  const { data, isLoading } = useFetch(url);
  const { handleClickSave } = useHandleClickSave('model', model, '/years');

  useEffect(() => {
    if (model.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [model]);

  if (isLoading) return <Loading />
  return (
    <form className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-white text-center" id="h2-models">
        Desta vez, escolha o modelo do veículo.
      </h2>
      <label htmlFor="models">
        <select
          className="form-select form-select-sg" aria-label=".form-select-sm example"
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
        onClick={ () => navigate('/brands') }
      >
        Voltar
      </button>
    </form>
  
  )
}

export default Models;
