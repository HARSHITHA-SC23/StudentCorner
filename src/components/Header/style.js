import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "black",
  },
  title: {
    fontSize: "1.38rem",
    color: "white",
    marginLeft: "5px",
    cursor: "pointer",
  },
  appBar: {
    backgroundColor: "#102c58",
    color: "white",
    borderBottom: "0.2rem solid #f3cc1d",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  header__wrapper__right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color:"white",
    fontSize:"30pt",
  },
  icon: {
    marginRight: "15px",
    color: "white",
    cursor: "pointer",
    fontSize:"30pt",
  },
  todo:{
    background: "#00796b",
    cursor: "pointer",
  }
  
}));