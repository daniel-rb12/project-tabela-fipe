import React, { useEffect, useState } from 'react';
import useHandleClickSave from '../hooks/useHandleClickSave';
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
      <h1 id="home-title">TABELA FIPE</h1>
      <label htmlFor="input-name" className="form-label">
        Nome:
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
        className="btn btn-primary btn-sm"
        type="button"
        onClick={ handleClickSave }
        disabled={ isDisabled }
      >
        Enviar
      </button>
    </form>
  )
}

export default Home;
