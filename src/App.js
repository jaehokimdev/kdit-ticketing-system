import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Layout from "./components/Layout";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="main"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
