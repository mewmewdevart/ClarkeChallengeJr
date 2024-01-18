import React, { useState, useEffect } from 'react';

// External libraries
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Local components
import './App.css';

// Assets
import logo from './assets/images/logo.png';
import logoEnel from './assets/images/suppliers/enelGreen.png';
import logoTiete from './assets/images/suppliers/aes-tiete.png';
import logoRenovaveis from './assets/images/suppliers/EDP_2022.svg';
import logoLightsource from './assets/images/suppliers/Lightsource-bp-logo.png';
import logoNeoenergia from './assets/images/suppliers/neoenergia.png';

// === Debug purposes
// Function to generate random evaluations
function generateRandomEvaluation() {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 11));
}

// Function to process evaluations
function processEvaluation(evaluation) {
  const filteredEvaluation = evaluation.map((value) => Math.max(0, Math.min(10, value)));
  const integerCount = filteredEvaluation.filter((num) => Number.isInteger(num)).length;
  const integerSum = filteredEvaluation.reduce((sum, num) => Number.isInteger(num) ? sum + num : sum, 0);
  const average = integerCount > 0 ? integerSum / integerCount : 0;

  return { average, customers: integerCount };
}

// Function to create a new supplier design of table
function createData(name, logo, state, costPerKWh, limit, totalCustomers, ratings) {
  return { name, logo, state, costPerKWh, limit, totalCustomers, ratings };
}

function customersData() {
  const evaluationEnel = generateRandomEvaluation();
  const evaluationTiete = generateRandomEvaluation();
  const evaluationRenovaveis = generateRandomEvaluation();
  const evaluationLightsource = generateRandomEvaluation();
  const evaluationNeoenergia = generateRandomEvaluation();

  // Process evaluations for each supplier
  const enelResults = processEvaluation(evaluationEnel);
  const tieteResults = processEvaluation(evaluationTiete);
  const renovaveisResults = processEvaluation(evaluationRenovaveis);
  const lightsourceResults = processEvaluation(evaluationLightsource);
  const neoenergiaResults = processEvaluation(evaluationNeoenergia);

  // Create suppliers object
  const suppliers = [
    createData('Enel Green Power', logoEnel, 'Multiplos estados', 0.12, '9000 kWh', enelResults.customers, enelResults.average),
    createData('AES Tietê', logoTiete, 'Estado de São Paulo', 0.15, '3500 kWh', tieteResults.customers, tieteResults.average),
    createData('EDP Renováveis', logoRenovaveis, 'Multiplos estados', 0.10, '1000 kWh', renovaveisResults.customers, enelResults.average),
    createData('Lightsource BP', logoLightsource, 'Multiplos estados', 0.10, '3000 kWh', lightsourceResults.customers, lightsourceResults.average),
    createData('Neoenergia', logoNeoenergia, 'Multiplos estados', 0.10, '500 kWh', neoenergiaResults.customers, neoenergiaResults.average),
  ];

  // Add unique keys to each supplier
  const suppliersWithUniqueKeys = suppliers.map((supplier) => ({
    ...supplier,
    id: supplier.name.replace(/\s/g, '_'),
  }));

  // Function to create a new supplier
  function TableRowComponent({ supplier }) {
    return (
      <TableRow key={supplier.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="center" component="th" scope="row">
          {supplier.name}
        </TableCell>
        <TableCell align="center">
          <img src={supplier.logo} alt={`${supplier.name} Logo`} style={{ width: '75px' }} />
        </TableCell>
        <TableCell align="center">{supplier.state}</TableCell>
        <TableCell align="center">{supplier.costPerKWh}</TableCell>
        <TableCell align="center">{supplier.limit}</TableCell>
        <TableCell align="center">{supplier.totalCustomers}</TableCell>
        <TableCell align="center">{supplier.ratings}</TableCell>
      </TableRow>
    );
  }

  // Return the suppliers and TableRowComponent if needed in your application
  return { suppliersWithUniqueKeys, TableRowComponent };
}

// Call the function and get the results
const { suppliersWithUniqueKeys, TableRowComponent } = customersData();

// Use the results as needed
console.log(suppliersWithUniqueKeys);

// Function to create a table
function DenseTable({ monthlyConsumption }) {
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  useEffect(() => {
    // If there is a search, filter suppliers by consumption or name
    if (monthlyConsumption && monthlyConsumption.trim() !== "") {
      const updatedSuppliers = suppliersWithUniqueKeys.filter((supplier) => {
        const consumptionFilter = Number(monthlyConsumption) >= Number(supplier.limit.replace(' kWh', ''));
        const nameFilter = supplier.name.toLowerCase().includes(monthlyConsumption.toLowerCase());

        return consumptionFilter || nameFilter;
      });

      setFilteredSuppliers(updatedSuppliers);
    } else {
      // If there is no search, show all suppliers
      setFilteredSuppliers(suppliersWithUniqueKeys);
    }
  }, [monthlyConsumption]);

  return (
    <TableContainer component={Paper} role="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nome da Companhia</TableCell>
            <TableCell align="center">Logo</TableCell>
            <TableCell align="center">Estado</TableCell>
            <TableCell align="center">Custo por kWh</TableCell>
            <TableCell align="center">Limite</TableCell>
            <TableCell align="center">Clientes totais</TableCell>
            <TableCell align="center">Avaliações Totais</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredSuppliers.map((supplier) => (
            <TableRowComponent key={supplier.id} supplier={supplier} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Function to design the page design
function App() {
  const [monthlyConsumption, setMonthlyConsumption] = useState("");

  const handleInputChange = (event) => {
    setMonthlyConsumption(event.target.value);
  };

  return (
    <div id="myDashboard" role="main">
      <header className="App-navbar big-responsive">
        <img src={logo} className="App-navbar__logo" alt="Logotipo da Empresa" />
        <nav>
          <ul className="App-navbar__list" role="navigation">
            <li className="App-navbar__item disabled">
              <a href="/dashboard" className="App-navbar__link">
                <HomeIcon />
                Painel
              </a>
            </li>
            <li className="App-navbar__item active">
              <a href="/marketplace" className="App-navbar__link">
                <ShoppingCartIcon />
                Marketplace
              </a>
            </li>
            <li className="App-navbar__item disabled">
              <a href="/tables" className="App-navbar__link">
                <TableChartIcon />
                Tabelas
              </a>
            </li>
            <li className="App-navbar__item disabled">
              <a href="/profile" className="App-navbar__link">
                <PersonIcon />
                Perfil
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container-fluid">
        <section className="pageMain">
          <p className="pageMain__current" role="status">Inicio / Marketplace / Fornecedores</p>
          <h1 className="pageMain__title">Fornecedores</h1>
          <p className="pageMain__description">
            Encontre o fornecedor de energia limpa que melhor atenda às suas necessidades.
          </p>

          <div className="form-group form-group--has-search">
            <div className="form-group__search-icon-container">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={monthlyConsumption}
              onChange={handleInputChange}
              className="form-control form-control--search"
              placeholder="Insira consumo mensal por kWh"
              aria-label="Insira consumo mensal por kWh"
            />
          </div>
        </section>

        <section className="tableContent">
          <DenseTable monthlyConsumption={monthlyConsumption} />
        </section>
      </main>
    </div>
  );
}

export default App;
