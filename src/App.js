import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Router } from "@reach/router";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Loading from "view/component/Show/Loading";
import Alert from "view/component/Show/Alert";
import Toast from "view/component/Show/Toast";

import Landing from "view/page/landing";
import Login from "view/page/register/Login";
import Daftar from "view/page/register/Daftar";

import "control/util/global";
import "view/component/Show/Loading";
import "view/component/Show/Alert";
import "view/component/Show/Toast";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Landing path="/" />
          <Login path="/Login" />
          <Daftar path="/Daftar" />
        </Router>
        <Alert />
        <Loading />
        <Toast />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    primary: {
      main: "#0080FF",
      dark: "202020",
    },
    bg: {
      main: "#FFFFF",
    },
  },
});

export default App;
