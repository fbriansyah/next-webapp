import Head from "next/head";
import Router from "next/router";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Copyright from "../components/Copyright/Copyright";
import LoginForm from "../components/Forms/auth/LoginForm";
import {setToken} from '../utils/localStorage';

export default function Home() {

  function loginHandler(username, password) {
    if(username === 'admin') {
      if(password === 'admin') {
        const user = {
          name: "Admin",
          token: btoa("admin")
        }
        setToken(JSON.stringify(user))
        Router.push('admin/dashboard')
      }
    }
  }

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
    </Container>
  );
}
