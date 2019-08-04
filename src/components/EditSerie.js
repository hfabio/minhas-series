import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function EditSerie(props) {
    const [name, setName] = useState('');
    const [success, setSucces] = useState(false);
    const [error, setError] = useState(false);
    const id = props.match.params.id;

    useEffect(() => {
        axios.get(`/api/series/${id}`)
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
        axios.put(`/api/series/${id}`, {
            name
        })
            .then((res) => {
                setSucces(true);
            });
    }

    if (success) {
        return <Redirect to='/series' />
    }
    if (error) {
        return <Redirect to='/series' />
    }

    return (
        <div className='container'>
            <h1>Editar série (id: {id})</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='genero'>Nome da série</label>
                    <input type='text' value={name} className='form-control' id='genero' onChange={handleInsert} aria-describedby='generoHelp' placeholder='Digite o nome do novo gênero' />
                    <small id='generoHelp' className='form-text text-muted'>Digite o nome da série.</small>
                </div>
                <button type='submit' onClick={handleClick} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    );
}
