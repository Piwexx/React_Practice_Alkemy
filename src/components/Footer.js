import '../css/footer.css';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<>
			<Row>
				<Col>
					<footer>
						<nav>
							<ul>
								<li>@{new Date().getFullYear()}</li>
							</ul>
						</nav>
					</footer>
				</Col>
			</Row>
		</>
	);
};

export default Footer;
