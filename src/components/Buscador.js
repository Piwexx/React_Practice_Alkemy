import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
	const MySwal = withReactContent(Swal);
	const navigate = useNavigate();
	const submitHandler = e => {
		e.preventDefault();
		const search = e.target.search.value.trim();

		if (search.length === 0) {
			MySwal.fire('Tenes que escribir una palabra clave');
			return;
		}
		if (search.length < 4) {
			MySwal.fire('Tenes que escribir una palabra de mas de 4 caracteres');
			return;
		}
		e.target.search.value = '';
		navigate(`/Resultados?r=${search}`);
	};
	return (
		<>
			<Form onSubmit={submitHandler} className='mx-5 d-flex'>
				<Form.Group controlId='formBasicEmail'>
					<Form.Control name='search' type='search' placeholder='Search' />
				</Form.Group>
				<Form.Group className='mx-3' controlId='formBasicEmail'>
					<Button variant='primary' type='submit'>
						Search
					</Button>
				</Form.Group>
			</Form>
		</>
	);
};

export default Buscador;
