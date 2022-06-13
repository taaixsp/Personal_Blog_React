import React from "react";
import {AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import {toast} from 'react-toastify';

function Navbar(){
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        navigate('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" className='menu font'>
        <Toolbar variant="dense">
            <Box style={{ cursor: "pointer" }} >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        home
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                <Box mx={1} style={{ cursor: "pointer" }}>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
               
                <Box mx={1} className="cursor" onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>
                
            </Box>

        </Toolbar>
    </AppBar>
    }

    return(
    <>
        {navbarComponent}
    </>
    )
}

export default Navbar;