import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Infos() {
  const navigate = useNavigate();

  const vehicle = localStorage.getItem('vehicle');
  const brand = localStorage.getItem('brand');
  const model = localStorage.getItem('model');
  const year = localStorage.getItem('year');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${brand}/modelos/${model}/anos/${year}`

  const { data, isLoading } = useFetch(url);

  const nameLocalStorage = localStorage.getItem('name');

  if (isLoading) return <h1>Carregando...</h1>
  return (
    <main>
      <h1>{`Aqui estão as informações, ${nameLocalStorage}.`}</h1>
      <table>
        <tr>
          <th>Mês de referência:</th>
          <td>{ data.MesReferencia }</td>
        </tr>
        <tr>
          <th>Código FIPE:</th>
          <td>{ data.CodigoFipe }</td>
        </tr>
        <tr>
          <th>Marca:</th>
          <td>{ data.Marca }</td>
        </tr>
        <tr>
          <th>Modelo:</th>
          <td>{ data.Modelo }</td>
        </tr>
        <tr>
          <th>Ano Modelo:</th>
          <td>{ data.AnoModelo }</td>
        </tr>
        <tr>
          <th>Combustível:</th>
          <td>{ data.Combustivel }</td>
        </tr>
        <tr>
          <th>Preço Médio:</th>
          <td>{ data.Valor }</td>
        </tr>
      </table>
      <button
        type="button"
        onClick={ () => navigate('/type') }
      >
        Nova Consulta
      </button>
      <button
        type="button"
        onClick={ () => navigate('/') }
      >
        Sair
      </button>
    </main>
  )
}

export default Infos;
