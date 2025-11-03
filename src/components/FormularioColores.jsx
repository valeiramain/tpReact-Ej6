import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaColores from './ListaColores';
import { useState } from 'react';


const FormularioColores = () => {
    const [arrayColores, setArrayColores] = useState([])
    const [color, setColor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const colorBuscado = arrayColores.find((itemColor) => itemColor === color.toLowerCase().trim())
        if (colorBuscado) {
            return alert("El color ya fue ingresado")
        }
        setArrayColores([...arrayColores, color.trim()])
        // e.target.reset()
        setColor('')

    }

    return (
        <>
            <section className="container border border-secondary shadow p-3 rounded mb-4">
                <p>Administrar Colores 🎨</p>
                <Form onSubmit={handleSubmit}>
                    {/* Contenedor principal: se vuelve flex a partir de md */}
                    <div className="d-md-flex gap-2 align-items-md-center">
                        {/* Grupo del input */}
                        <Form.Group
                            controlId="inputcolor"
                            className="mb-3 mb-md-0 d-flex gap-2 flex-grow-1 align-items-center">
                            <div className="border cuadrado" style={{ backgroundColor: color || "transparent" }}></div>
                            <Form.Control
                                type="text"
                                className="flex-grow-1"
                                placeholder="escriba color en inglés"
                                onChange={(e) => setColor(e.target.value)} value={color}
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
                <ListaColores arrayColores={arrayColores}></ListaColores>
        </>

    );
};

export default FormularioColores;