import { makeStyles } from '@material-ui/core/styles';
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import blue from "@material-ui/core/colors/blue";
import TableRow from "@material-ui/core/TableRow";

export const formStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export const tableStyle = makeStyles({
    table: {
        minWidth: 500,
    },
});

export const paginationStyle = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: blue["900"],
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);