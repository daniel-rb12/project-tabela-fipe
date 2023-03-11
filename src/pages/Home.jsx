import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState('');

  return (
    <form>
      <label htmlFor="input-name">
        Nome
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
      >
        Enviar
      </button>
    </form>
  )
}

export default Home;
