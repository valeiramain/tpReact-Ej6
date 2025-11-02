import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormularioColores = () => {
    return (
        <section className="container border border-secondary shadow p-3 rounded">
            <p>Administrar Colores 🎨</p>
            <Form>
                {/* Contenedor principal: se vuelve flex a partir de md */}
                <div className="d-md-flex gap-2 align-items-md-center">
                    {/* Grupo del input */}
                    <Form.Group
                        controlId="inputcolor"
                        className="mb-3 mb-md-0 d-flex gap-2 flex-grow-1 align-items-center"
                    >
                        <div className="cuadrado"></div>
                        <Form.Control
                            type="text"
                            className="flex-grow-1"
                            placeholder="escriba color en inglés"
                        />
                    </Form.Group>
                </div>
                
                    <Button
                        variant="secondary"
                        className="w-md-auto mt-0 mt-md-2 shadow-lg"
                    >
                        Guardar
                    </Button>
                
            </Form>
        </section>

    );
};

export default FormularioColores;