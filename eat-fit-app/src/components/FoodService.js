import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://json-server-eatfit-lfhw.onrender.com/foods';

const useFoodService = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFoods([]);
      }
    };

    fetchData();
  }, []);

  return foods;
};

export default useFoodService;
