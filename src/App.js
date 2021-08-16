import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled-components/GlobalStyle";
import { theme } from "./styled-components/Theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <h2>Hello Babys!</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
