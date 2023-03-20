import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Type() {
  const [vehicle, setVehicle] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (vehicle.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [vehicle]);

  const nameLocalStorage = localStorage.getItem('name');

  const handleClickSave = () => {
    localStorage.setItem('vehicle', vehicle);
    navigate('/brands');
  };

  return (
    <div>
      <form>
        <h2>
          { `Bem-vindo, ${nameLocalStorage}.
            Escolha o tipo de veículo que deseja consultar.` }
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

export default Type;
