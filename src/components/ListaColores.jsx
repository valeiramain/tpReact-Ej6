import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const ListaColores = () => {
    return (
        <section className="container border border-secondary shadow p-3 rounded">
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Nombre Color</Card.Title>
                            <article className='d-flex justify-content-center mb-2'>
                                <div className="cuadrado"></div>
                            </article>
                            <div className="d-flex justify-content-end">
                                <Button variant="secondary">Borrar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default ListaColores;