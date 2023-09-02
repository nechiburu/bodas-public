import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from 'next/router';
import Link from "next/link";
import clienteAxios from '../../api/axios';

const LoginPage = (props) => {
  const router = useRouter();

  const [value, setValue] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = useState(new SimpleReactValidator({
    className: 'errorMessage'
  }));

  const login = async (e) => {
    e.preventDefault();    

    try {
        const respuesta = await clienteAxios.post('/login',value)
        console.log(respuesta)
        toast.success('Has iniciado sesión correctamente')
        router.push('http://localhost:5173/');
  
    } catch (error) {
        console.log(error)
        toast.error('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Iniciar Sesión</h2>
        <p>Ingresa con tu cuenta</p>
        <form onSubmit={login}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={changeHandler}
                onChange={changeHandler}
              />
              {validator.message('email', value.email, 'required|email')}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Contraseña"
                value={value.password}
                variant="outlined"
                name="password"
                type="password"
                label="Contraseña"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={changeHandler}
                onChange={changeHandler}
              />
              {validator.message('password', value.password, 'required')}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formAction">
                <FormControlLabel
                  control={<Checkbox checked={value.remember} onChange={rememberHandler} />}
                  label="Recordarme"
                />
                <Link href="/forgot-password">¿Olvidaste la contraseña?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">Iniciar Sesión</Button>
              </Grid>
              <Grid className="loginWithSocial">
                {/* Botones para inicio de sesión con redes sociales */}
              </Grid>
              <p className="noteHelp">¿No tienes una cuenta?<Link href="/register">Crear cuenta gratis</Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
};

export default LoginPage;
