import { useState } from "react"
import Card from "./Card"
import FormStyles from "../Styles/Form.module.css"


const Form = () => {


    const [estudiante, setEstudiante] = useState({
        nombre: '',
        carrera: '',
    })

    const [mostrar, setMostrar] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const nombreValido = estudiante.nombre.length >= 3 && !estudiante.nombre.startsWith(' ');
        
        const carreraValida = estudiante.carrera.length >= 6;
        if (nombreValido && carreraValida){
            setMostrar(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    const handleVolver = () => {
        setEstudiante({
            nombre: "",
            carrera: "",
     
        });
        setMostrar(false);
        setError(false);
    };
   
  return (
    <div className={FormStyles.container}>
        {mostrar ? null :
            <form className={FormStyles.formulario} onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" onChange={(event) => setEstudiante({...estudiante, nombre: event.target.value})}/>
                <label>Carrera que estas cursando:</label>
                <input type="text" onChange={(event) => setEstudiante({...estudiante, carrera: event.target.value})}/>
                <button>Enviar</button>
            </form>
        }

        {mostrar ? 
            <>
                <Card estudiante={estudiante}/>
                <button onClick={handleVolver}>Volver</button>
            </>
        : error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>
        }
    
    </div>
  )
}

export default Form
