import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Register2() {
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
        {({ errors }) => (
          <Form className="formulario">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              id="contenedor"
            >
              <Grid id="ContenedorNombreCompleto" item xs={12}>
                <Field
                  id="nombre"
                  placeholder="Nombre Completo"
                  name="nombre"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => (
                    <Typography
                      variant="caption"
                      display="block"
                      style={{ color: "red" }}
                    >
                      {errors.nombre}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid id="ContenedorTelefono" item xs={12}>
                <Field id="Telefono" placeholder="Telefono" name="telefono" />
                <ErrorMessage
                  name="telefono"
                  component={() => (
                    <Typography
                      variant="caption"
                      display="block"
                      style={{ color: "red" }}
                    >
                      {errors.telefono}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid id="ContenedorMail" item xs={12}>
                <Field id="Mail" placeholder="Correo Electronico" name="mail" />
                <ErrorMessage
                  name="mail"
                  component={() => (
                    <Typography
                      variant="caption"
                      display="block"
                      style={{ color: "red" }}
                    >
                      {errors.mail}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid id="ContenedorUsuario" item xs={12}>
                <Field id="Usuario" placeholder="Usuario" name="usuario" />
                <ErrorMessage
                  name="usuario"
                  component={() => (
                    <Typography
                      variant="caption"
                      display="block"
                      style={{ color: "red" }}
                    >
                      {errors.usuario}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid id="ContenedorContraseña" item xs={12}>
                <Field id="Password" placeholder="Contraseña" name="password" />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <Typography
                      variant="caption"
                      display="block"
                      style={{ color: "red" }}
                    >
                      {errors.password}
                    </Typography>
                  )}
                />
              </Grid>
              <Grid id="ContenedorContraseña" item xs={12}>
                <Button variant="contained" type="submit">
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}
