import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Router from "next/router";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TablePagination from "@material-ui/core/TablePagination";

import Layout from "../../components/Layouts/AdminLayout";
import Table from "../../components/UI/Table/DefaultTable"
import { isLogin } from "../../utils/auth";
import * as urls from "../../constants/urls";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    minHeight: 240,
  },
}));

export default function Dashboard() {
  const pageTitle = "Dahsboard";
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const headers = ["Nama", 'Umur', "Key", "Action"]
  const rows = [
    ["Febrian", 20, "9123asd91239rs", "1"],
    ["Rasyiid", 21, "ss123ssq29d0ksa", "2"],
    ["John", 25, "3dqo1masidfnqwe", "3"],
    ["Doe", 24, "93kkksdf1sa", "4"],
  ]
  const [page, setPage] = React.useState(0);
  const [rowPerPage, setRowPerPage] = React.useState(10);

  const onEditHandler = (id) => {
    console.log(id)
  }

  function checkLogin() {
    if (!isLogin()) {
      Router.push(urls.login);
    }
  }

  React.useEffect(checkLogin, []); // check user data

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Layout title={pageTitle}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Typography component="h1" variant="h5">
              Person
            </Typography>
            <Divider />
            <Table 
              headers={headers}
              data={rows}
              onEdit={onEditHandler}
              editIndex={(headers.length - 1)}
              maxColumn={headers.length}
            />
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowPerPage}
              page={page}
              backIconButtonProps={{
                "aria-label": "previous page",
              }}
              nextIconButtonProps={{
                "aria-label": "next page",
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
