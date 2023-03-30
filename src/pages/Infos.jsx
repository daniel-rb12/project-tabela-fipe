import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading'
import '../css/infos.css';

function Infos() {
  const navigate = useNavigate();

  const vehicle = localStorage.getItem('vehicle');
  const brand = localStorage.getItem('brand');
  const model = localStorage.getItem('model');
  const year = localStorage.getItem('year');
  const url = `https://parallelum.com.br/fipe/api/v1/${vehicle}/marcas/${brand}/modelos/${model}/anos/${year}`

  const { data, isLoading } = useFetch(url);

  const nameLocalStorage = localStorage.getItem('name');

  const renderDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  };

  if (isLoading) return <Loading />
  return (
    <main className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2
        className="text-center text-white"
        id="info-msg"  
      >
        { `Aqui estão as informações, ${nameLocalStorage}:` }
      </h2>
      <div className="table-container">
        <table className="table table-striped border border-dark">
          <tr className="bg-secondary text-white">
            <th>Mês de referência:</th>
            <td>{ data.MesReferencia }</td>
          </tr>
          <tr className="bg-white">
            <th>Código FIPE:</th>
            <td>{ data.CodigoFipe }</td>
          </tr>
          <tr className="bg-secondary text-white">
            <th>Marca:</th>
            <td>{ data.Marca }</td>
          </tr>
          <tr className="bg-white">
            <th>Modelo:</th>
            <td>{ data.Modelo }</td>
          </tr>
          <tr className="bg-secondary text-white">
            <th>Ano Modelo:</th>
            <td>{ data.AnoModelo }</td>
          </tr>
          <tr className="bg-white">
            <th>Combustível:</th>
            <td>{ data.Combustivel }</td>
          </tr>
          <tr className="bg-secondary text-white">
            <th>Data da consulta:</th>
            <td>{ renderDate() }</td>
          </tr>
          <tr className="bg-success text-warning">
            <th>Preço Médio:</th>
            <td>{ data.Valor }</td>
          </tr>
        </table>
      </div>
      <div>
        <button
          className="btn btn-primary btn-sg mb-3 ms-2"
          type="button"
          onClick={ () => navigate('/type') }
        >
          Nova Consulta
        </button>
      </div>
      <div>
        <button
          className="btn btn-secondary btn-sg mx-2"
          type="button"
          onClick={ () => navigate('/years') }
        >
          Voltar
        </button>
        <button
          className="btn btn-danger btn-sg"
          type="button"
          onClick={ () => navigate('/') }
        >
          Sair
        </button>
      </div>
    </main>
  )
}

export default Infos;
