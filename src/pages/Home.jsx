import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const handleClickSave = () => {
    localStorage.setItem('name', name);
    navigate('/marcas');
  };

  return (
    <form>
      <label htmlFor="input-name">
        Nome:
        <input
          type="text"
          name="input-name"
          id="input-name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <button
        type="button"
        onClick={ handleClickSave }
      >
        Enviar
      </button>
    </form>
  )
}

export default Home;
