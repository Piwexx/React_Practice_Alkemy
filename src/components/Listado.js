import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsBookmarks, BsBookmarkCheck } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Listado = props => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (token === null) {
			navigate('/');
		}
		const endPoint = 'https://rickandmortyapi.com/api/character';

		axios.get(endPoint).then(res => setData(res.data.results));
	}, []);
	return (
		<>
			<Row>
				{data.map((element, idx) => {
					return (
						<Col key={idx}>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant='top' src={element.image} />
								<Card.Body>
									<Card.Title className='name'>{element.name}</Card.Title>
									<Card.Title className='species'>{element.species}</Card.Title>
									<Link
										className='btn btn-primary'
										to={`/detalle?id=${element.id}`}>
										Details
									</Link>
									<Button
										data-element={idx}
										onClick={props.addOrRemoveFromFavs}
										variant='light'>
										<BsBookmarks />
									</Button>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default Listado;
