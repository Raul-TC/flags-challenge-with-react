import "./App.css";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { FlagProvider } from "./context/FlagContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <FlagProvider>
          <Header />
          <Main />
        </FlagProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
