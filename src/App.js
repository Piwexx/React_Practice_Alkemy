import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle';
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';
/**
 * Style
 */
//import './css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
	const itemsFav = JSON.parse(localStorage.getItem('favs'));
	let tempItemsFav;

	if (itemsFav === null) {
		tempItemsFav = [];
	} else {
		tempItemsFav = itemsFav;
	}

	const addOrRemoveFromFavs = e => {
		const btn = e.currentTarget;
		const parent = btn.parentElement.parentElement;
		const imgURL = parent.querySelector('Img').getAttribute('src');
		const name = parent.querySelector('.name').textContent;
		const species = parent.querySelector('.species').textContent;
		const dataStar = { imgURL, name, species, id: btn.dataset.element };

		const isOn = tempItemsFav.find(element => element.id === dataStar.id);
		if (isOn === undefined) {
			tempItemsFav.push(dataStar);
			localStorage.setItem('favs', JSON.stringify(tempItemsFav));
			console.log('Pelicula Agregada');
		} else {
			const isOff = tempItemsFav.filter(element => element.id !== dataStar.id);
			localStorage.setItem('favs', JSON.stringify(isOff));
			console.log('Pelicula Eliminada');
		}
	};
	return (
		<>
			<Container>
				<Header />
				<Routes>
					<Route exact path={'/'} element={<Login />} />
					<Route
						path={'/listado'}
						element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
					/>
					<Route path={'/detalle'} element={<Detalle />} />
					<Route
						path={'/Favoritos'}
						element={<Favoritos addOrRemoveFromFavs={addOrRemoveFromFavs} />}
					/>
					<Route
						path={'/resultados'}
						element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />}
					/>
				</Routes>
				<Footer />
			</Container>
		</>
	);
}

export default App;
