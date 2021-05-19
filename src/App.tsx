import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/App.router";
import AuthProvider from "./auth/Auht.provider";
import Layout from "./components/layouts/layout";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Router>
            <AppRouter />
          </Router>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
