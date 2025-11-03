
import Row from 'react-bootstrap/Row';
import ItemColor from './itemColor';

const ListaColores = ({ arrayColores, borrarColor }) => {
    return (
        <section className="container border border-secondary shadow p-3 rounded">
            <Row xs={1} md={3} className="g-4">
                {
                    arrayColores.map((color, indice) => <ItemColor key={indice} color={color} borrarColor={borrarColor}></ItemColor>)
                }
            </Row>
        </section>
    );
};

export default ListaColores;