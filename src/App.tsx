import { Routes, Route, RouteProps } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "./mui-theme";

interface Props {
  routes: RouteProps[];
}

const App: React.FC<Props> = ({ routes }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route}></Route>
          ))}
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
