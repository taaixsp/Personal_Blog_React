import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Theme from '../../../models/Theme';
import useLocalStorage from 'react-use-localstorage';
import { busca, post } from '../../../services/Services';

function ListaTema() {
  const [themes, setThemes] = useState<Theme[]>([])
  const [token, setToken] = useLocalStorage('token');
  let history = useNavigate();

  useEffect(()=>{
    if(token == ''){
      alert("Você precisa estar logado")
      history("/login")
    }
  }, [token])


  async function getTheme(){
    await busca("/theme", setThemes, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTheme()
  }, [themes.length])

  return (
    <>
    {
      themes.map(themes =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
            
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${themes.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${themes.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
    </>
  );
}


export default ListaTema;