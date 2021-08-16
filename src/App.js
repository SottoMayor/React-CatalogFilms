import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled-components/GlobalStyle";
import { theme } from "./styled-components/Theme";
import Layout from "./Layout/Layout";
import { Switch, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <h2>Hello Babys!</h2>

        <Switch>

          <Route path="/" exact>
            <Redirect to="/filmes"/>
          </Route>

          <Route path="/filmes" exact>
            <h4>AllFilms</h4>
          </Route>

          <Route path="/filmes/favoritos">
            <h4>My Films</h4>
          </Route>

          <Route path="/filmes/:filmId">
            <h4>Film Details</h4>
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
