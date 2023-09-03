import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.api-ninjas.com/v1";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let options = {
method:"GET",
headers: { 'x-api-key': 'em1VOBG7yq79wGsNVMiUsg==H9ypsDzsXVgcRbPO' }
}

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url, options)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;