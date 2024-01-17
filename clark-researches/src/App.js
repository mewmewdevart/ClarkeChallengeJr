import React from 'react';
import logo from './assets/images/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import PersonIcon from '@mui/icons-material/Person';

import './App.css';

function App() {
	return (
		<>
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
			
		</>
	);
}

export default App;
