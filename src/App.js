import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import fetchData from './components/fetchData';
import Table from './components/CoinTable';
import './App.css';
import { generalTheme } from './components/styles/generalTheme';

function App() {
  const [coins, setCoins] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState(20)

  useEffect(() => {
    fetchData(rows, page).then(coins => setCoins(coins));
  }, [rows, page]);

  return (
    <ChakraProvider theme={generalTheme}>
      <h1>CoinStatus</h1>
      <Table coins={coins} page={page} setPage={setPage} rows={rows} setRows={setRows}/>
    </ChakraProvider>
  );
}

export default App;
