import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Register3() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      mail: "",
      usuario: "",
      password: "",
    },
    validationSchema: yup.object({
      nombre: yup.string().required("Debe ingresar un nombre"),
      telefono: yup.number().required("Debe ingresar un telefono"),
      mail: yup
        .string()
        .email()
        .required("Debe ingresar un correo electronico"),
      usuario: yup.string().required("Debe ingresar un usuario"),
      password: yup.string().required("Debe ingresar una contraseña"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div style={{ padding: "84px", height: "75vh" }}>
      <form className="formulario" onSubmit={formik.handleSubmit}>
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
              values={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.nombre}
              fullwidth
            />
            {/* {formik.touched.nombre && formik.errors.nombre && (
              <Typography
                variant="caption"
                display="block"
                style={{ color: "red" }}
              >
                {formik.errors.nombre}
              </Typography>
            )} */}
          </Grid>
          <Grid id="ContenedorTelefono" item xs={12}>
            <TextField
              id="Telefono"
              label="Telefono"
              name="telefono"
              variant="outlined"
              values={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.telefono && formik.errors.telefono && (
              <Typography
                variant="caption"
                display="block"
                style={{ color: "red" }}
              >
                {formik.errors.telefono}
              </Typography>
            )}
          </Grid>
          <Grid id="ContenedorMail" item xs={12}>
            <TextField
              id="Mail"
              label="Correo Electronico"
              name="mail"
              variant="outlined"
              values={formik.values.mail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mail && formik.errors.mail && (
              <Typography
                variant="caption"
                display="block"
                style={{ color: "red" }}
              >
                {formik.errors.mail}
              </Typography>
            )}
          </Grid>
          <Grid id="ContenedorUsuario" item xs={12}>
            <TextField
              id="Usuario"
              label="Usuario"
              name="usuario"
              variant="outlined"
              values={formik.values.usuario}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.usuario && formik.errors.usuario && (
              <Typography
                variant="caption"
                display="block"
                style={{ color: "red" }}
              >
                {formik.errors.usuario}
              </Typography>
            )}
          </Grid>
          <Grid id="ContenedorContraseña" item xs={12}>
            <TextField
              id="Password"
              label="Contraseña"
              name="password"
              variant="outlined"
              values={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <Typography
                variant="caption"
                display="block"
                style={{ color: "red" }}
              >
                {formik.errors.password}
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
    </div>
  );
}
