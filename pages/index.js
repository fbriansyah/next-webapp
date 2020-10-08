import Head from "next/head";
import Router from "next/router";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Copyright from "../components/Copyright/Copyright";
import LoginForm from "../components/Forms/auth/LoginForm";
import { setToken } from "../utils/localStorage";
import { useState } from "react";
import * as urls from '../constants/urls'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home() {
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  function loginHandler(username, password) {
    if (username === "admin") {
      if (password === "admin") {
        const user = {
          name: "Admin",
          token: btoa("admin"),
        };
        setToken(JSON.stringify(user));
        Router.push(urls.dahsboard);
      } else {
        setError({
          isError: true,
          message: "Password Salah",
        });
      }
    } else {
      setError({
        isError: true,
        message: "Username Tidak Dikenal",
      });
    }
  }

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError({
      isError: false,
      message: "",
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <LoginForm onLogin={loginHandler} />
      <Box mt={8}>
        <Copyright />
      </Box>
      <Snackbar
        open={error.isError}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          {error.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
