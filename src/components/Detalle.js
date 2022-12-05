import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Detalle = () => {
	const navigate = useNavigate();
	const [data, setData] = useState();
	let query = new URLSearchParams(window.location.search);
	let id = query.get('id');
	const token = localStorage.getItem('token');
	const MySwal = withReactContent(Swal);

	useEffect(() => {
		if (token === null) {
			navigate('/');
		}
		axios
			.get(`https://rickandmortyapi.com/api/character/${id}`)
			.then(res => setData(res.data))
			.catch(e => {
				MySwal.fire('No se encuentra');
				navigate('/listado');
			});
	}, [id]);

	return (
		<>
			<Row>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant='top' src={data?.image} />
						<Card.Body>
							<Card.Title>{data?.name}</Card.Title>
							<Card.Title>{data?.species}</Card.Title>
							<Card.Title>{data?.status}</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Detalle;
