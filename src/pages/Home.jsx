import React, { useEffect, useState } from 'react';
import useHandleClickSave from '../hooks/useHandleClickSave';
import logo from '../images/logo-tabela.png'
import '../css/home.css'

function Home() {
  const [name, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const { handleClickSave } = useHandleClickSave('name', name, '/type');

  useEffect(() => {
    if (name.length >= 4) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    };

  }, [name]);

  return (
    <form className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <img id="logo-fipe" src={ logo } alt="logo tipo da tabela fipe" />
      <div className="d-flex flex-column align-items-center">
        <label htmlFor="input-name" className="form-label">
          <input
            className="form-control text-center"
            type="text"
            name="input-name"
            id="input-name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
            placeholder="Como gostaria de ser chamado?"
          />
        </label>
        <button
          className="btn btn-primary btn-sg mt-3"
          type="button"
          onClick={ handleClickSave }
          disabled={ isDisabled }
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default Home;
