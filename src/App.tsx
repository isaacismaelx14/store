import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/App.router";
import AuthProvider from "./auth/Auht.provider";
import Layout from "./components/layouts/layout";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ className: "icon" }}>
        <AuthProvider>
          <Router>
            <Layout>
              <AppRouter />
            </Layout>
          </Router>
        </AuthProvider>
      </IconContext.Provider>
    </div>
  );
}

export default App;
