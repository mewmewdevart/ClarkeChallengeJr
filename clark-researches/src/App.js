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
import logo from './assets/images/logo.png';

function DenseTable({ suppliers, monthlyConsumption }) {
	const [filteredSuppliers, setFilteredSuppliers] = useState([]);

	useEffect(() => {
		// If there is a search, filter the suppliers
		if (monthlyConsumption && monthlyConsumption.trim() !== "") {
			const updatedSuppliers = suppliers.filter((supplier) => {
				const consumptionFilter = Number(monthlyConsumption) >= Number(supplier.limit.replace(' kWh', ''));
				const nameFilter = supplier.name.toLowerCase().includes(monthlyConsumption.toLowerCase());

				return consumptionFilter || nameFilter;
			});

			setFilteredSuppliers(updatedSuppliers);
		} else {
			// If there is no search, show all suppliers
			setFilteredSuppliers(suppliers);
		}
	}, [monthlyConsumption, suppliers]);

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
						<TableRow key={supplier.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell align="center">{supplier.name}</TableCell>
							<TableCell align="center">
								<img src={supplier.logo} alt={`${supplier.name} Logo`} style={{ width: '75px' }} />
							</TableCell>
							<TableCell align="center">{supplier.state}</TableCell>
							<TableCell align="center">{supplier.cost_per_kwh}</TableCell>
							<TableCell align="center">{supplier.limit}</TableCell>
							<TableCell align="center">{supplier.total_customers}</TableCell>
							<TableCell align="center">{supplier.ratings}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function App() {
	const [monthlyConsumption, setMonthlyConsumption] = useState("");
	const [suppliers, setSuppliers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8000/api/suppliers/');
				const data = await response.json();
				setSuppliers(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

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
					<DenseTable suppliers={suppliers} monthlyConsumption={monthlyConsumption} />
				</section>
			</main>
		</div>
	);
}

export default App;
