import React, { ChangeEvent, useEffect, useState } from 'react';
import {Grid, Box, Typography, Button, TextField} from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
import './UserRegister.css';
import User from '../../models/User';
import { userRegister } from '../../services/Services';
import {toast} from 'react-toastify';

function UserRegister(){

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            name: '',
            usuario: '',
            password: '',
            image: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            name: '',
            usuario: '',
            password: '',
            image: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.password){
        userRegister(`/usuarios/cadastrar`, user, setUserResult)
        toast.error('Usuário cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        
        }else{
            
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='image2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="text2">Cadastrar</Typography>
                            <TextField value={user.name} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='name' label='name' variant='outlined' name='name' margin='normal' fullWidth required />
                            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal'fullWidth required />
                            <TextField value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='password' variant='outlined' name='password' margin='normal' type='password' fullWidth required />
                            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password'fullWidth required />
                            
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' color='secondary' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='primary' className='button'>
                                        Cadastrar
                                    </Button>
                            </Box>
                        </form>
                </Box>
            </Grid>


        </Grid>
    );
}

export default UserRegister;