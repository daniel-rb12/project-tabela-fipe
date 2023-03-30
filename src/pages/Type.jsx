import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useHandleClickSave from '../hooks/useHandleClickSave';
import '../css/type.css'

function Type() {
  const [vehicle, setVehicle] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const { handleClickSave } = useHandleClickSave('vehicle', vehicle, '/brands');

  useEffect(() => {
    if (vehicle.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [vehicle]);

  const nameLocalStorage = localStorage.getItem('name');

  return (
    <form className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-white text-center" id="h2-type">
        { `Bem-vindo, ${nameLocalStorage}!
          Escolha o tipo de veículo que deseja consultar.` }
      </h2>
      <div>
        <label htmlFor="type">
          <select
            className="form-select form-select-sg" aria-label=".form-select-sm example"
            name="type"
            id="type"
            onChange={ ({ target }) => setVehicle(target.value) }>
              <option value=''>Selecione...</option>
              <option value="carros">Carros</option>
              <option value="motos">Motos</option>
              <option value="caminhoes">Caminhões</option>
          </select>
        </label>
        <div className="d-flex flex-column align-items-center justify-content-center mt-3">
          <button
            className="btn btn-primary btn-sg mb-2"
            type="button"
            onClick={ handleClickSave }
            disabled={ isDisabled }
          >
            Enviar
          </button>
          <button
            className="btn btn-secondary btn-sg"
            type="button"
            onClick={ () => navigate('/') }
          >
            Voltar
          </button>
        </div>
      </div>
    </form>
  )
}

export default Type;
