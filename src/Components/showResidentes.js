import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../css/showResidents.css'

const endpoint = 'http://localhost:8000/api'
const ShowResidents = () => {
    const [residents, setResidents] = useState([])
    useEffect(() => {
        getAllResidents()
    }, [])

    const getAllResidents = async () => {
        const response = await axios.get(`${endpoint}/residents`    )
        setResidents(response.data)
        console.log(response.data);
    }

    const deleteResident = async (id) => {
        await axios.delete(`${endpoint}/resident/${id}`)
        getAllResidents()
    }

    return (
        <div className='container-all'>
            <div className='container-link'>
                <Link to="/create" >create</Link>
            </div>
            <div className='container-intermedate'>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Cedula</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Clave</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {residents.map((resident) => (
                            <tr key={resident.id}>
                                <td>{resident.cedula}</td>
                                <td>{resident.nombre}</td>
                                <td>{resident.correo}</td>
                                <td>{resident.clave}</td>
                                <td className='espacio'>
                                    <Link to={`/edit/${resident.id}`} >Edit</Link>
                                    <button className='button' onClick={() => deleteResident(resident.id)} >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowResidents
