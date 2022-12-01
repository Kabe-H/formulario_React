import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { Formik } from "formik";

export default function Register() {
  return (
    <div style={{ padding: "84px", height: "75vh" }}>
      <Formik
        initialValues={{
          nombre: "",
          telefono: "",
          mail: "",
          usuario: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};
          //Nombre
          if (!values.nombre) {
            errors.nombre = "Por favor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            errors.nombre = "El nombre solo puede contener letras y espacios";
          }
          //Telefono
          if (!values.telefono) {
            errors.telefono = "Por favor ingrese un telefono";
          } else if (!/^\d+$/.test(values.telefono)) {
            errors.telefono = "El telefono no es valido";
          }
          //mail
          if (!values.mail) {
            errors.mail = "Por favor ingrese un mail";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z>0-9-.]+$/.test(
              values.mail
            )
          ) {
            errors.mail = "El formato de mail no es valido";
          }
          //usuario
          if (!values.usuario) {
            errors.usuario = "Por favor ingrese un usuario";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.usuario)) {
            errors.usuario = "El usuario no es valido";
          }
          //contraseña
          if (!values.password) {
            errors.password = "Por favor ingrese una contraseña";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
              values.password
            )
          ) {
            errors.password =
              "La contraseña debe poseer 8 caracteres minimo con una letra y un numero";
          }

          return errors;
        }}
        onSubmit={(values) => {
          console.log("formulario enviado");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              id="contenedor"
            >
              <Grid id="ContenedorNombreCompleto" item xs={12}>
                <TextField
                  id="nombre"
                  label="Nombre Completo"
                  name="nombre"
                  variant="outlined"
                  values={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullwidth
                />
                {touched.nombre && errors.nombre && (
                  <Typography
                    variant="caption"
                    display="block"
                    style={{ color: "red" }}
                  >
                    {errors.nombre}
                  </Typography>
                )}
              </Grid>
              <Grid id="ContenedorTelefono" item xs={12}>
                <TextField
                  id="Telefono"
                  label="Telefono"
                  name="telefono"
                  variant="outlined"
                  values={values.telefono}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.telefono && errors.telefono && (
                  <Typography
                    variant="caption"
                    display="block"
                    style={{ color: "red" }}
                  >
                    {errors.telefono}
                  </Typography>
                )}
              </Grid>
              <Grid id="ContenedorMail" item xs={12}>
                <TextField
                  id="Mail"
                  label="Correo Electronico"
                  name="mail"
                  variant="outlined"
                  values={values.mail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.mail && errors.mail && (
                  <Typography
                    variant="caption"
                    display="block"
                    style={{ color: "red" }}
                  >
                    {errors.mail}
                  </Typography>
                )}
              </Grid>
              <Grid id="ContenedorUsuario" item xs={12}>
                <TextField
                  id="Usuario"
                  label="Usuario"
                  name="usuario"
                  variant="outlined"
                  values={values.usuario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.usuario && errors.usuario && (
                  <Typography
                    variant="caption"
                    display="block"
                    style={{ color: "red" }}
                  >
                    {errors.usuario}
                  </Typography>
                )}
              </Grid>
              <Grid id="ContenedorContraseña" item xs={12}>
                <TextField
                  id="Password"
                  label="Contraseña"
                  name="password"
                  variant="outlined"
                  values={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <Typography
                    variant="caption"
                    display="block"
                    style={{ color: "red" }}
                  >
                    {errors.password}
                  </Typography>
                )}
              </Grid>
              <Grid id="ContenedorContraseña" item xs={12}>
                <Button variant="contained" type="submit">
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
}
