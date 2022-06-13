import React, { useEffect, useState } from 'react'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Services';
import Theme from '../../../models/Theme';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';


function DeletarTema() {
    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const [theme, setTheme] = useState<Theme>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/theme/${id}`, setTheme, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
            history('/themes')
            deleteId(`/theme/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Tema deletado com sucesso');
          }
        
          function nao() {
            history('/themes')
          }
          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {theme?.description}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;