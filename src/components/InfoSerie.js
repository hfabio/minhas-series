import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Badge } from 'reactstrap';

export default function InfoSerie(props) {
    const [form, setForm] = useState({});
    const [success, setSucces] = useState(false);
    const [mode, setMode] = useState('INFO');

    const [data, setData] = useState({});
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        axios.get(`/api/series/${props.match.params.id}`)
            .then((res) => {
                setData(res.data);
                setForm(res.data);
            });
    }, [props.match.params.id]);
    useEffect(() => {
        axios.get('/api/genres/')
            .then((res) => {
                setGeneros(res.data.data);
            });
    }, [props.match.params.id]);

    const handleInsert = field => evt => {
        if (field === 'status') {
            setForm({
                ...form,
                [field]: (evt.target.value === 'on') ? 'TO WATCH' : 'WATCHED'
            });
            if (evt.target.value === 'on') { evt.target.checked = false; evt.target.value = 'off' } else { evt.target.checked = true; evt.target.value = 'on' }
        } else {
            setForm({
                ...form,
                [field]: evt.target.value
            });
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        axios.put(`/api/series/${props.match.params.id}`, {
            form
        })
            .then((res) => {
                console.log(res)
                setSucces(true);
            });
    }

    if (success) {
        return <Redirect to='/series' />
    }

    //custom header
    const masterHeader = {
        height: '50vh',
        minHeight: '500px',
        backgroundImage: `url(${data.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    //end custom header

    return (
        <div>
            <header style={masterHeader}>
                <div className='h-100 ' style={{ background: 'rgba(0,0,0,.7)' }}>
                    <div className='h-100 container'>
                        <div className='row h-100 align-items-center'>
                            <div className='col-3'>
                                <img className='img-fluid img-thumbnail' src={data.poster} alt={data.name} />
                            </div>
                            <div className='col-8' >
                                <h1 className='font-weight-light text-white'>{data.name}</h1>
                                <div className='lead text-white'>
                                    <Badge color={(data.status === 'WATCHED') ? 'success' : 'warning'}>
                                        {(data.status === 'WATCHED') ? 'Assistido' : 'Não assistido'}
                                    </Badge>
                                    <div><br /></div>
                                    Gênero: {(data.genre !== null) ? data.genre : 'Desconhecido'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div><br /></div>
            <div className='container'>
                <button onClick={() => { (mode === 'EDIT') ? setMode('INFO') : setMode('EDIT') }} className='btn btn-info'>{(mode !== 'EDIT') ? 'Editar' : 'Cancelar edição'}</button>
            </div>
            {
                mode === 'EDIT' &&
                <div className='container'>
                    <h1>Nova série</h1>
                    <div><br /></div>
                    <pre>{JSON.stringify(form)}</pre>
                    <div><br /></div>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='genero' style={{ marginRight: '50px' }}>Já assistiu?</label>
                            <input type='checkbox' onChange={handleInsert('status')} aria-describedby='generoHelp' checked={form.status === 'WATCHED'} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='genero'>Nome da série</label>
                            <input type='text' value={form.name} className='form-control' id='genero' onChange={handleInsert('name')} aria-describedby='generoHelp' placeholder='Digite o nome da série' />
                            <small id='generoHelp' className='form-text text-muted'>Digite o nome da série.</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='genero'>Comentário:</label>
                            <input type='text' value={form.comments} className='form-control' id='genero' onChange={handleInsert('comment')} aria-describedby='generoHelp' placeholder='Digite um comentário sobre a série' />
                            <small id='generoHelp' className='form-text text-muted'>Digite um comentário para a série.</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='genero'>Gênero:</label>
                            {/*<input type='text' value={form.comments} className='form-control' id='genero' onChange={handleInsert('comment')} aria-describedby='generoHelp' placeholder='Digite o nome da série' />*/}
                            <select className='form-control' onChange={handleInsert('genre')} value={form.genre}>
                                {generos.map(e => <option value={e.name} key={e.id}>{e.name}</option>)}
                            </select>
                            <small id='generoHelp' className='form-text text-muted'>Selecione o gênero da série.</small>
                        </div>
                        <button type='submit' onClick={handleClick} className='btn btn-primary'>Salvar</button>
                    </form>
                    <div>
                        <div><br /></div>
                        <div><br /></div>
                        <div><br /></div>
                        <div><br /></div>
                        <div><br /></div>
                    </div>
                </div>
            }
        </div>
    );
}
