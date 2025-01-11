import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  CircularProgress,
  Box,
} from "@mui/material";
import { tableStyles } from "../styles/EvTableStyles";
import EVChart from "./EVChart";
interface EVData {
  vehicle_id: string;
  county: string;
  city: string;
  state: string;
  zipcode: string;
  year: number;
  manufacturer: string;
  model: string;
  vehicle_type: string;
  clean_fuel_eligibility: string;
  ev_count: number;
  location: string;
  utility_company: string;
  utility_id: string;
}

const EVTable=()=> {
  const [evData, setEvData] = useState<EVData[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          "./Electric_Vehicle_Population_Data.csv"
        );
        const text = await response.text();
        console.log("Fetched file content:", text); 

       
        if (text.startsWith("<!DOCTYPE html>")) {
          console.error("The response is an HTML page, not a CSV file.");
          return;
        }

     
        Papa.parse(text, {
          complete: (result) => {
            const data = result.data.map((row: any) => ({
              vehicle_id: row[0],
              county: row[1],
              city: row[2],
              state: row[3],
              zipcode: row[4],
              year: Number(row[5]),
              manufacturer: row[6],
              model: row[7],
              vehicle_type: row[8],
              clean_fuel_eligibility: row[9],
              ev_count: Number(row[10]),
              location: row[11],
              utility_company: row[12],
              utility_id: row[13],
            }));

            console.log("Parsed EV data:", data);
            setEvData(data);
            setLoading(false); 
          },
        });
      } catch (error) {
        console.error("Error fetching CSV file:", error);
        setLoading(false); 
      }
    };

    fetchCSV();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
const chartData = evData.reduce((acc: any[], curr: any) => {
  const existingYear = acc.find((item) => item.year === curr.year);
  if (existingYear) {
    existingYear.evCount += curr.ev_count;
  } else {
    acc.push({ year: curr.year.toString(), evCount: curr.ev_count });
  }
  return acc;
}, []);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <EVChart chartData={chartData} />
          <TableContainer sx={tableStyles.gridView}>
            <Table sx={tableStyles.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Vehicle ID
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    County
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    City
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    State
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Zipcode
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Year
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Manufacturer
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Model
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Vehicle Type
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Clean Fuel Eligibility
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    EV Count
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Location
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Utility Company
                  </TableCell>
                  <TableCell sx={tableStyles.tableHeadingFont} align="left">
                    Utility ID
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {evData
                  .slice(
                    page * rowsPerPage + 1,
                    page * rowsPerPage + rowsPerPage
                  )
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.vehicle_id ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.county ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.city ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.state ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.zipcode ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.year ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.manufacturer ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.model ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.vehicle_type.length > 20
                          ? row.vehicle_type.slice(0, 20) + "..."
                          : row.vehicle_type ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.clean_fuel_eligibility.length > 20
                          ? row.clean_fuel_eligibility.slice(0, 20) + "..."
                          : row.clean_fuel_eligibility ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.ev_count ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.location ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.utility_company ?? "--"}
                      </TableCell>
                      <TableCell sx={tableStyles.tableCell} align="left">
                        {row.utility_id ?? "--"}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>

            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={evData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </>
      )}
    </>
  );
};

export default EVTable;
