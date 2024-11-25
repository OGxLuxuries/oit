import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import getData from '../../utils/getData';

const columns = [
    {
        id: 'term',
        label: 'Year',
        minWidth: 170,
        align: 'right',
        format: (value) => value.substring(0, 4),
      },
  { id: 'employer', label: 'Employer', minWidth: 170 },
  { id: 'degree', label: 'Degree', minWidth: 100 },
  {
    id: 'city',
    label: 'City',
    minWidth: 170,
  },
  
];

const columns2 = [
 
{ id: 'employer', label: 'Employer', minWidth: 170 },
{ id: 'degree', label: 'Degree', minWidth: 100 },
{
  id: 'city',
  label: 'City',
  minWidth: 170,
},
{id: "title", label: "Title"},
{id: "startDate", label: "Start Date"}

];



export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [tableObj, setTableObj] = useState([]);
  const [table2Obj, setTable2Obj] = useState([]);
  const [loaded, setLoaded] = useState(false);

useEffect(() => {
    getData("employment/").then((json) => {
        setTableObj(json.coopTable.coopInformation);
        setTable2Obj(json.employmentTable.professionalEmploymentInformation);      
        setLoaded(true);
    });
}, []);


// Display loading message while data is fetched
if (!loaded)
    return (
        <>
            <div className="full-screen-width">LOADING...</div>
        </>
    );

  return (
    <>
    <div className="full-screen-width">
      
      <Paper sx={{ width: '50%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ maxWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {tableObj
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, rowIndex) => (
      <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell key={column.id} align={column.align}>
              {column.format ? column.format(value) : value} 
            </TableCell>
          );
        })}
      </TableRow>
    ))}
</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableObj.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    

<Paper sx={{ width: '50%', overflow: 'hidden' }}>
<TableContainer sx={{ maxHeight: 440 }}>
  <Table stickyHeader aria-label="sticky table">
    <TableHead>
      <TableRow>
        {columns2.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
{table2Obj
.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
.map((row, rowIndex) => (
<TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
  {columns2.map((column) => {
    const value = row[column.id]; 
    return (
      <TableCell key={column.id} align={column.align}>
        {column.format ? column.format(value) : value} 
      </TableCell>
    );
  })}
</TableRow>
))}
</TableBody>
  </Table>
</TableContainer>
<TablePagination
  rowsPerPageOptions={[10, 25, 100]}
  component="div"
  count={table2Obj.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
</Paper>

      </div>
  

       
</>
  );
}