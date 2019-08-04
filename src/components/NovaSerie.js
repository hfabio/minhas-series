import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function NovaSerie() {
    const [name, setName] = useState('');
    const [success, setSucces] = useState(false);

    const handleInsert = evt => {
        setName(evt.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault()
        axios.post('/api/series', {
            name
        })
            .then((res) => {
                setSucces(true);
            });
    }

    if (success) {
        return <Redirect to='/series' />
    }

    return (
        <div className='container'>
            <h1>Nova série</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='genero'>Nome da nova série</label>
                    <input type='text' value={name} className='form-control' id='genero' onChange={handleInsert} aria-describedby='generoHelp' placeholder='Digite o nome da nova série' />
                    <small id='generoHelp' className='form-text text-muted'>Digite o nome da nova série.</small>
                </div>
                <button type='submit' onClick={handleClick} className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    );
}
