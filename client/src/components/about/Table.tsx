// import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import personalDetails from "src/info/personal";

export default function AboutTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "transparent",
        height: "100%",
        display: "flex",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {personalDetails.map((row) => (
            <TableRow key={row.key}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  border: 0,
                  fontWeight: 600,
                  color: "#dd5",
                  fontSize: "1.1rem",
                }}
              >
                {row.key}
              </TableCell>
              <TableCell
                align="right"
                sx={{ border: 0, color: "#fff", fontSize: "1.2rem" }}
              >
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
