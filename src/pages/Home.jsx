import React, { useEffect, useState } from 'react';
import useHandleClickSave from '../hooks/useHandleClickSave';

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
    <form>
      <label htmlFor="input-name">
        Nome:
        <input
          type="text"
          name="input-name"
          id="input-name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
          placeholder="Como deseja ser chamado?"
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
