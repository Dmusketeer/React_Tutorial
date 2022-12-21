import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styles/Global";
import Search from "./components/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar></Navbar>
        <Search></Search>
      </>
    </ThemeProvider>
  );
}

export default App;
