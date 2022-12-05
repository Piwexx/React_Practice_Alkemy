import { Nav, Navbar, Container } from 'react-bootstrap';
import Buscador from './Buscador';
const Header = () => {
	return (
		<>
			<Navbar>
				<Container>
					<Navbar.Brand href='/'>Alkemy</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='/'>Login</Nav.Link>
						<Nav.Link href='/listado'>Listado</Nav.Link>
						<Nav.Link href='/favoritos'>Favoritos</Nav.Link>
						<Nav.Link href='/contacto'>Contacto</Nav.Link>
						<Buscador />
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
