import { Providers } from "@/providers";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "@/routes";

function App() {
  return (
    <Router>
      <Providers>
        <AppRouter />
      </Providers>
    </Router>
  );
}

export default App;
