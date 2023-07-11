import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router';
import Link from "next/link";
import clienteAxios from "../../api/axios";

const SignUpPage = (props) => {
    const router = useRouter();

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = useState(
        new SimpleReactValidator({
            className: 'errorMessage'
        })
    );

    const submitForm = async (e) => {
        e.preventDefault();


        try {
            const respuesta = await clienteAxios.post('/register', value)
            console.log(respuesta)
            toast.success('Se registro exitosamente')
            router.push('/login');

        } catch (error) {
            console.log(error)
            toast.error('Hubo un error!');
        }
    };

    return (
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>Registro</h2>
                <p>Registra tu cuenta</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Nombre Completo"
                                value={value.full_name}
                                variant="outlined"
                                name="full_name"
                                label="Nombre"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.full_name, 'required|alpha')}
                        </Grid>
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
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
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
                                label="Contraseña"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirmar Contraseña"
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirmar Contraseña"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm_password', value.confirm_password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Resgistrarse</Button>
                            </Grid>
                            {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> */}
                            <p className="noteHelp">¿Ya tienes una cuenta? <Link href="/login">Regresar al ingreso</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default SignUpPage;