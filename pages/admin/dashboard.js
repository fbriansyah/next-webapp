import Layout from "../../components/Layouts/AdminLayout";
import Typography from "@material-ui/core/Typography";
import { isLogin } from "../../utils/auth";
import Router from 'next/router';

export default function Dashboard() {
  const pageTitle = "Dahsboard";

  function checkLogin() {
    if(!isLogin()) {
      Router.push('/')
    }
  }

  React.useEffect(checkLogin, []); // check user data

  return (
    <Layout title={pageTitle}>
      <Typography component="h1" variant="h5">
        {pageTitle}
      </Typography>
    </Layout>
  );
}
