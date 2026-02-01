import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./components/ui/Button";
import { ThemeProvider } from "./theme/ThemeContext";
import ThemeToggle from "./theme/ThemeToggle";
import Login from "./pages/Login";
import Modal from "./components/ui/Modal";
import { useState } from "react";
import Badge from "./components/ui/Badge";
import Register from "./pages/Register";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <ThemeProvider>
        <ThemeToggle>theme</ThemeToggle>

        <Routes>
          <Route
            path="/"
            element={<MainUI  open={open} setOpen={setOpen}></MainUI>}
          />
          <Route
            path="/login"
            element={<Login></Login>}
          />
          <Route
            path="/register"
            element={<Register></Register>}
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

// Separate component for main UI
function MainUI({ open, setOpen }) {
  return (
    <section className="h-screen flex flex-col gap-3 items-center justify-center">
      <Button variant="primary" disabled={false}>
        Click Now
      </Button>

      <Button variant="secondary" disabled={false} onClick={()=> setOpen(true)}>
        See Modal
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={"Delete Account"}
      >
        Are you sure to delete this account?
      </Modal>

      <Badge variant="primary">Badge</Badge>
    </section>
  );
}

export default App;
