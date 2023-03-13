import React, { useMemo, useState } from 'react';
import TypeContext from './TypeContext';

function TypeProvider({ children }) {
  const [vehicle, setVehicle] = useState('');

  const contextValue = useMemo(() => ({
    vehicle,
    setVehicle,
  }), [vehicle]);

  return (
    <TypeContext.Provider value={ contextValue }>
      { children }
    </TypeContext.Provider>
  )
}

export default TypeProvider