import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled-components/GlobalStyle";
import { theme } from "./styled-components/Theme";
import Layout from "./Layout/Layout";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Layout>
        <h2>Hello Babys!</h2>
      </Layout>

    </ThemeProvider>
  );
}

export default App;
