import React from 'react';

/* Import logo */
import logo from './assets/images/logo.png';

/* import Icons from Material UI */
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

/* Import Table from Material UI */
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/* Import CSS */
import './App.css';

function createData(name, logo, state, costPerKWh, limit, totalCustomers, ratings) {
  return { name, logo, state, costPerKWh, limit, totalCustomers, ratings };
}

const suppliers = [
  createData('Supplier A', 'logo_a.png', 'State A', 0.12, 'Unlimited', 7, 4.5),
  createData('Supplier B', 'logo_b.png', 'State B', 0.15, '500 kWh', 8 , 4.0),
  createData('Supplier C', 'logo_c.png', 'State C', 0.10, '1000 kWh', 9, 4.8),
];

function DenseTable() {
  return (
	<TableContainer component={Paper}>
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
		  {suppliers.map((supplier) => (
			<TableRow key={supplier.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
			  <TableCell align="center" component="th" scope="row">
				{supplier.name}
			  </TableCell>
			  <TableCell align="center">
				<img src={supplier.logo} alt={`${supplier.name} Logo`} style={{ width: '50px', height: '50px' }} />
			  </TableCell>
			  <TableCell align="center">{supplier.state}</TableCell>
			  <TableCell align="center">{supplier.costPerKWh}</TableCell>
			  <TableCell align="center">{supplier.limit}</TableCell>
			  <TableCell align="center">{supplier.totalCustomers}</TableCell>
			  <TableCell align="center">{supplier.ratings}</TableCell>
			</TableRow>
		  ))}
		</TableBody>
	  </Table>
	</TableContainer>
  );
}

function App() {
  return (
	<>
	  <div id="myDashboard">
		<header className="App-navbar">
		  <img src={logo} className="App-navbar__logo" alt="Logotipo da Empresa" />
		  <nav>
			<ul className="App-navbar__list">
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
		  <nav className="navbar navbar-light bg justify-content-end">
			<ul className="nav navbar-nav navbar-right">
			  <li className="navbar__icon">
				<a href="/">
				  <PersonIcon />
				  User
				</a>
			  </li>
			</ul>
		  </nav>

		  <section className="pageMain">
			<p className="pageMain__current">Inicio / Marketplace / Fornecedores</p>
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
				className="form-control form-control--search"
				placeholder="Insira consumo mensal por kWh"
			  />
			</div>
		  </section>

		  <section className="tableContent">
			<DenseTable />
		  </section>
		</main>
	  </div>
	</>
  );
}

export default App;
