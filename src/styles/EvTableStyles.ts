

import { CustomStyles } from "../utils/CustomStyles";

export const tableStyles = {
  tableHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",
    width: "100%",
  },
  table: {
    minWidth: `${CustomStyles.fontWeights.bold} !important`,
    "& .MuiTableCell-root": {
      textWrap: "nowrap !important",
    },
    "& .MuiTableRow-root": {
      verticalAlign: "text-top !important",
      padding: "0px !important",
    },
  },
  tableCell: {
    color: CustomStyles.colours.Grey,
    fontWeight: `${CustomStyles.fontWeights.semiBold} !important`,
    fontSize: {
      xs: `${CustomStyles.fontSizes.xs} !important`,
      sm: `${CustomStyles.fontSizes.md} !important`,
    },
    fontFamily: CustomStyles.font.SxRoboto,
    borderBottom: "1px solid gary !important",
  },
  tableRow: {
    color: CustomStyles.colours.Black,
    fontWeight: "600 !important",
    fontSize: "18px !important",
    fontStyle: CustomStyles.font.Roboto,
    fontFamily: CustomStyles.font.Roboto,
    borderBottom: "1px solid white !important",
  },
  tableHeadingFont: {
    color: CustomStyles.colours.Black,
    fontWeight: `${CustomStyles.fontWeights.semiBold} !important`,
    fontSize: "18px !important",
    fontFamily: CustomStyles.font.Roboto,
    width: "150px",
  },
  gridView: {
    overflow: "auto !important",
    minHeight: "100px !important",
    maxHeight: "450px !important",
    backgroundColor: CustomStyles.colours.White,
    marginTop: "3% !important",
    marginBottom: "3% !important",
    boxShadow: `${CustomStyles.colours.boxShadow} 0px 8px 24px`,
    borderRadius: `${CustomStyles.fontSizes.xl} !important`,
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#1976d2",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f1f1f1",
      borderRadius: "10px",
    },
    padding: "0px !important",
  },

  gridMargin: {
    marginBottom: "5%",
  },
};
