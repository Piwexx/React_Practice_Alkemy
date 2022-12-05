import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsBookmarks, BsBookmarkCheck } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Resultados = props => {
	const query = new URLSearchParams(window.location.search);
	const dataSearch = query.get('r');
	const [data, setData] = useState([]);

	useEffect(() => {
		const endPoint = `https://rickandmortyapi.com/api/character?name=${dataSearch}`;

		axios.get(endPoint).then(res => setData(res.data.results));
	}, [dataSearch]);

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

export default Resultados;
