import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './../css/create.css'

const endpoint = 'http://localhost:8000/api/resident'
const CreateResident = () => {
    const [cedula, setCedula] = useState(0)
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [clave, setClave] = useState('')
    const navigate = useNavigate()
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { cedula: cedula, nombre: nombre, correo: correo, clave: clave })
        navigate('/list')
    }
    return (
        <div className="container-all">
            <h3>
                Create Resident
            </h3>

            <form onSubmit={store}>
                <div className="container-intermedate">

                    <label for="Cedula">Cedula</label>
                    <input
                        type="number"
                        name="Cedula"
                        id="Cedula"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)} />


                    <label for="Nombre">Nombre</label>
                    <input
                        type="text"
                        name="Nombre"
                        id="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />


                    <label for="Correo">Correo</label>
                    <input
                        type="rreo, "
                        name="Correo"
                        id="Correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)} />


                    <label for="Clave">Clave</label>
                    <input
                        type="rreo, "
                        name="Clave"
                        id="Clave"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)} />

                    <button className="button2" type="submit" >Store</button>
                </div>
            </form>

        </div>
    )
}

export default CreateResident