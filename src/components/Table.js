import React, { useEffect } from 'react';
import { useUserData } from '../context/DataContext'
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.light,
		color: theme.palette.common.white, 
		fontFamily: theme.typography.fontFamily[9],
		fontSize: 18
  },
  body: {
    color: theme.palette.primary.dark,
		fontSize: 14,
		fontFamily: theme.typography.fontFamily[9]
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.success.light,
		},
  },
}))(TableRow);

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableImg: {
    width: "75px",
    borderRadius: "15px",
    border: "1px solid #3f51b5"
  },
});

export default function Tables() {

	const classes = useStyles();
  const [state, dispatch] = useUserData()  
    
  const addFavourite = (item) => {
    localStorage.setItem(item.id, JSON.stringify(item))
  }
  
  const deleteFavourite = (id) => {
    localStorage.removeItem(id)
  }
	 
  return (
    <TableContainer component={Paper} style={{border: "1px solid yellow", marginTop: "5rem"}}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>description</StyledTableCell>
            <StyledTableCell align="center">fullName</StyledTableCell>
            <StyledTableCell align="center">avatar</StyledTableCell>
            <StyledTableCell align="center">languageCode</StyledTableCell>
            <StyledTableCell align="center">repo</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.data.length !== 0 ? state.data.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.description}
              </StyledTableCell>
              <StyledTableCell align="center">{item.full_name}</StyledTableCell>
              <StyledTableCell align="center">
                <img src={item.owner.avatar_url} alt="image" className={classes.tableImg} />
              </StyledTableCell>
              <StyledTableCell align="center">{item.language}</StyledTableCell>
              <StyledTableCell align="center">{item.owner.html_url}</StyledTableCell>
              <StyledTableCell>
                <AddCircleOutlineRoundedIcon  onClick={()=>addFavourite(item)} style={{color: theme.palette.info.light}}/>
                <DeleteOutlineRoundedIcon  onClick={()=>deleteFavourite(item.id)} style={{color: "red"}}/>
              </StyledTableCell>
            </StyledTableRow>
          )): null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
