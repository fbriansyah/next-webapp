import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../UI/Header/Header";
import Drawer from "../UI/Drawer/Drawer";
import Copyright from "../Copyright/Copyright";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function AdminLayout({ children, title }) {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={title} open={open} drawerOpen={() => setOpen(true)} />
      <Drawer open={open} drawerClose={() => setOpen(false)} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
