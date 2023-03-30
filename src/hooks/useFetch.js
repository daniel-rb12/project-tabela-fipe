import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const requestAPI = async () => {
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

  useEffect(() => {
    requestAPI();
  }, []);
  

  return { data, isLoading }
}

export default useFetch;