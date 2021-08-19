import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled-components/GlobalStyle";
import { theme } from "./styled-components/Theme";
import Layout from "./Layout/Layout";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home';
import FilmDetails from './Pages/FilmDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>

        <Switch>

          <Route path="/" exact>
            <Redirect to="/filmes"/>
          </Route>

          <Route path="/filmes" exact>
            <Home />
          </Route>

          <Route path="/filmes/favoritos">
            <h4>My Films</h4>
          </Route>

          <Route path="/filmes/:filmId">
            <FilmDetails/>
          </Route>

          <Route path="/login">
            <h4>Login</h4>
          </Route>

          <Route path="/">
            <h4>Page not found!!!</h4>
          </Route>

        </Switch>

      </Layout>

    </ThemeProvider>
  );
}

export default App;
