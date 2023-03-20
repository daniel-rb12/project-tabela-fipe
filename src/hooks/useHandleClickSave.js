import { useNavigate } from 'react-router-dom';

function useHandleClickSave(storageName, data, route) {

  const navigate = useNavigate();

  const handleClickSave = () => {
    localStorage.setItem(storageName, data);
    navigate(route);
  };

  return { handleClickSave }
}

export default useHandleClickSave;
