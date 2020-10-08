/* eslint-disable react/prop-types */
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(0),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    height: "300px",
    overflowY: "auto"
  },
  fullHeight: {
    marginTop: theme.spacing(0),
    width: "100%",
    marginBottom: theme.spacing(2),
    height: window.innerHeight - 212,
    overflowY: "auto"
  },
  table: {
    minWidth: 650
  },
  button: {
    marginRight: theme.spacing(1)
  },
  tableBody: {
    // height: '285px',
    // overflow: 'auto',
    width: "100%"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

function EmptyRow({ span }) {
  return (
    <TableCell colSpan={span} component="th" style={{ textAlign: "center" }}>
      Tidak ada data yang ditampilkan
    </TableCell>
  );
}

export default function DefaultTable(props) {
  const classes = useStyles();
  const { headers, data, onEdit, editIndex, maxColumn } = props;

  return (
    <div className={classes.root}>
      <Paper square elevation={0}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableCell component="th" key={header + Math.random()}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {data.length <= 0 ? (
              <EmptyRow span={headers.length} />
            ) : (
              data.map((row, rowIndex) => (
                <TableRow key={row[0] + Math.random()}>
                  {row.map((col, index) => {
                    if (index >= maxColumn) {
                      return null;
                    }

                    if (index === editIndex) {
                      let id = col;
                      const buttons = [];

                      buttons.push(
                        <IconButton
                          key={`update-btn`}
                          className={classes.button}
                          onClick={() => onEdit(id)}
                          aria-label="edit"
                          color="primary"
                          size="small"
                        >
                          <CreateIcon /> Edit
                        </IconButton>
                      );
                      col = <div>{buttons.length === 0 ? id : buttons}</div>;
                    }

                    return (
                      <TableCell
                        align="left"
                        key={row[0] + index}
                        component="th"
                        scope="row"
                      >
                        {col || col === 0 ? col : "-"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
