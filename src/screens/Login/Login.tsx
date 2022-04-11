import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../../components/formsUI/TextField";
import { authTrueAction } from "../../store/actions";
import AuthSnackbar from "../../components/AuthSnackbar";

const theme = createTheme();

const INITIAL_FORM_STATE = {
  login: "",
  password: "",
};

type TValues = {
  login: string;
  password: string;
};

export default function Login() {
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (values: TValues): void => {
    if (
      values.login === process.env.REACT_APP_USER &&
      values.password === process.env.REACT_APP_PASSWORD
    ) {
      dispatch(authTrueAction());
    } else {
      setError("Ошибка логина и/или пароля!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {error && <AuthSnackbar message={error} handle={setError} />}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      fullWidth
                      name="login"
                      label="Введите логин"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrapper
                      fullWidth
                      name="password"
                      label="Введите пароль"
                    />
                  </Grid>
                </Grid>
                <Button
                  data-test="login-submit"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Войти
                </Button>
              </Form>
            </Formik>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
