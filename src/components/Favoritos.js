import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsBookmarks } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Favoritos = props => {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (token === null) {
			navigate('/');
		}
		const favorites = JSON.parse(localStorage.getItem('favs'));
		if (favorites !== null) {
			setData(favorites);
		}
	}, []);
	return (
		<>
			<Row>
				{data.map((element, idx) => {
					return (
						<Col key={idx}>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant='top' src={element.imgURL} />
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

export default Favoritos;
