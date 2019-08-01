import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import { Container } from './styles';

export default function Generos() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/genres')
            .then((res) => {
                setData(res.data.data);
            });
    }, []);

    const deleteGenero = (e, id) => {
        e.preventDefault();
        axios.delete(`api/genres/${id}`)
            .then(resp => {
                console.log(resp);
                // axios.get('/api/genres')
                //     .then((res) => {
                //         setData(res.data.data);
                //     });
                setData(data.filter(element => element.id !== id));
            });
    }

    const renderLine = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td><Link to={'/generos/edit/' + record.id} className='btn btn-warning'>Editar</Link> | <button onClick={(e) => deleteGenero(e, record.id)} className='btn btn-danger'>Deletar</button></td>
            </tr>
        );
    }

    if (data.length === 0) {
        return (
            <>
                <div className="Container">
                    <h1>Generos</h1>
                    <div className="alert alert-warning">Você não possui gêneros criados ainda</div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="container">
                <h1>Generos</h1>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th scope='col'>id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(renderLine)}
                    </tbody>
                </table>
            </div>
        </>
    );
}