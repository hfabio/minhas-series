import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function NovoGenero() {
    const [name, setName] = useState('');
    const [success, setSucces] = useState(false);

    const handleInsert = evt => {
        setName(evt.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault()
        axios.post('/api/genres', {
            name
        })
            .then((res) => {
                setSucces(true);
            });
    }

    if (success) {
        return <Redirect to='/generos' />
    }

    return (
        <div className='container'>
            <h1>Novo gênero</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='genero'>Nome do novo gênero</label>
                    <input type='text' value={name} className='form-control' id='genero' onChange={handleInsert} aria-describedby='generoHelp' placeholder='Digite o nome do novo gênero' />
                    <small id='generoHelp' className='form-text text-muted'>Digite o nome do novo gênero.</small>
                </div>
                <button type='submit' onClick={handleClick} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    );
}
