import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/App.router";
import AuthProvider from "./auth/Auht.provider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
