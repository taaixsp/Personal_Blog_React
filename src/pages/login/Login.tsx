import React, { useState, useEffect, ChangeEvent } from "react";
import './Login.css';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Services";
import UserLogin from '../../models/UserLogin';
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../store/tokens/Actions";


function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(

        {
            id: 0,
            name: '',
            usuario: '',
            password: '',
            image: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Login successful!')
        } catch (error) {
            alert('Login error!')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="text1">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='primary' className='button'>
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/userregister'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="text1">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='image'>
            </Grid>
        </Grid>
    );
}

export default Login;