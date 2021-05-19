import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/App.router";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
