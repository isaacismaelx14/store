import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routers/App.router";
import AuthProvider from "./auth/Auht.provider";
import Layout from "./components/layouts/layout";
import { IconContext } from "react-icons";
import AppProvider from "./providers/App.provider";

function App() {
  return (
    <div className="App">
      <Router>
        <IconContext.Provider value={{ className: "icon" }}>
          <AuthProvider>
            <AppProvider>
              <Layout>
                <AppRouter />
              </Layout>
            </AppProvider>
          </AuthProvider>
        </IconContext.Provider>
      </Router>
    </div>
  );
}

export default App;
