import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

function Login() {
	const navigate = useNavigate();
	const MySwal = withReactContent(Swal);

	// Regex
	const regexEmail = /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;

	// Handler form
	const submitHandler = e => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		if (email === '' || password === '') {
			MySwal.fire("Los campos no pueden estar vacios'");
			return;
		}

		if (email !== '' && !regexEmail.test(email)) {
			MySwal.fire('Debes escribir una direccion de correo electronico valida');
			return;
		}

		if (email !== 'challenge@alkemy.org' || password !== 'react') {
			MySwal.fire('Credenciales invalidas');
			return;
		}
		axios.post('http://challenge-react.alkemy.org', { email, password }).then(res => {
			const token = res.data.token;
			localStorage.setItem('token', token);
			MySwal.fire('Perfecto,ingresaste correctamente');
			navigate('/listado');
		});
	};
	const token = localStorage.getItem('token');
	useEffect(() => {
		if (token !== null) {
			navigate('/listado');
		}
	});

	return (
		<>
			<Row style={{ marginTop: '100px' }}>
				<Col sm>
					<Form onSubmit={submitHandler}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control name='email' type='email' placeholder='Enter email' />
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control name='password' type='password' placeholder='Password' />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Send
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
}

export default Login;
