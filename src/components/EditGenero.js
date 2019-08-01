import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function EditGenero(props) {
    const [name, setName] = useState('');
    const [success, setSucces] = useState(false);
    const [error, setError] = useState(false);
    const id = props.match.params.id;

    useEffect(() => {
        axios.get(`/api/genres/${id}`)
            .then(resp => {
                if (resp.data === '') {
                    setError(true);
                }
                setName(resp.data.name)
            })
    }, [id]);

    const handleInsert = evt => {
        setName(evt.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault()
        axios.put(`/api/genres/${id}`, {
            name
        })
            .then((res) => {
                setSucces(true);
            });
    }

    if (success) {
        return <Redirect to='/generos' />
    }
    if (error) {
        return <Redirect to='/generos' />
    }

    return (
        <div className='container'>
            <h1>Editar gênero (id: {id})</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='genero'>Nome do gênero</label>
                    <input type='text' value={name} className='form-control' id='genero' onChange={handleInsert} aria-describedby='generoHelp' placeholder='Digite o nome do novo gênero' />
                    <small id='generoHelp' className='form-text text-muted'>Digite o nome do gênero.</small>
                </div>
                <button type='submit' onClick={handleClick} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    );
}
