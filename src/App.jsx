import "./index.css";
import Button from "./components/ui/Button";
import { ThemeProvider } from "./theme/ThemeContext";
import ThemeToggle from "./theme/ThemeToggle";

function App() {
  return (
    <>
      <ThemeProvider>
          <ThemeToggle>theme</ThemeToggle>
        <section className="h-screen flex items-center justify-center">
          <Button variant="danger" disabled={false}>
            Click Now
          </Button>
        </section>
      </ThemeProvider>
    </>
  );
}

export default App;
