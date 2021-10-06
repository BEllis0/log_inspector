import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PropTypes from 'prop-types';

export default function DenseTable(props) {
    const { tableHeader, tableData } = props;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="_logger configuration parameters">
                <TableHead>
                    <TableRow>
                        {tableHeader.length && tableHeader.map((headerItem, i) => {
                            return (
                                <TableCell key={i}><p className="strong">{headerItem}</p></TableCell>        
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                {tableData.map((row) => (
                    <TableRow
                        key={row.parameterName}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row"><p>{row.parameterName}</p></TableCell>
                        <TableCell align="left"><p>{row.type}</p></TableCell>
                        <TableCell align="left"><p>{row.description}</p></TableCell>
                    </TableRow>
                ))}
                </TableBody>
      </Table>
    </TableContainer>
  );
}

DenseTable.propTypes = {
    tableHeader: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(
        PropTypes.shape({
            parameterName: PropTypes.string,
            type: PropTypes.string,
            description: PropTypes.string,
        })
    ),
};
