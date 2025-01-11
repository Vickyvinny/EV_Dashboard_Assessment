import { Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
  sidebar: {
    width: "240px",
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: theme.palette.common.white,
    paddingTop: theme.spacing(4),
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: "fixed",
    width: "100%",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      top: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
});
