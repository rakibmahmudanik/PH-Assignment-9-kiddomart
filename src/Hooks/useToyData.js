import React, { useEffect, useState } from "react";
import axios from "axios";

const useToyData = () => {
  const [toyData, setToyData] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      axios("../toyData.json")
        .then((data) => setToyData(data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 1500);
  }, []);

  return { toyData, isloading, error };
};

export default useToyData;
