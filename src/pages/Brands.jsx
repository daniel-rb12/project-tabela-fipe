import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useHandleClickSave from '../hooks/useHandleClickSave';
import Loading from '../components/Loading'
import Logo from '../components/Logo';
import '../css/brands.css'

function Brands() {
  const [brand, setIsBrand] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const vehicle = localStorage.getItem('vehicle');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas`;

  const { data, isLoading } = useFetch(url);
  const { handleClickSave } = useHandleClickSave('brand', brand, '/models');

  useEffect(() => {
    if (brand.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [brand]);

  if (isLoading) return <Loading />
  return (
    <form className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <Logo />
      <h2 className="text-white text-center" id="h2-brands">
        Agora, escolha a marca do veículo.
      </h2>
      <label htmlFor="brands">
        <select
          className="form-select form-select-sg" aria-label=".form-select-sm example"
          name="brands"
          id="brands"
          onChange={ ({ target }) => setIsBrand(target.value) }
        >
          <option value="">Selecione uma opção...</option>
          { data.map((option) => (
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
        onClick={ () => navigate('/type') }
      >
        Voltar
      </button>
    </form>
  )
}

export default Brands;
