import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useMemo(() => {
    if (name.length >= 4) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    };

  }, [name]);

  const handleClickSave = () => {
    localStorage.setItem('name', name);
    navigate('/type');
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
        disabled={ isDisabled }
      >
        Enviar
      </button>
    </form>
  )
}

export default Home;
