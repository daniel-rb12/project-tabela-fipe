import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = (false);


  const requestAPI = async () => {
    setIsLoading(true);
    try {
      const request = await fetch(url);
      const result = await request.json();
      setData(result);
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, requestAPI }
}

export default useFetch;