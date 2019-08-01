import React, { useEffect, useState } from 'react';
// import api from './api/api';
import Routes from './routes';
import Axios from 'axios';

export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    Axios.get('/api').then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <Routes home={data} />
    </div>
  );
}
