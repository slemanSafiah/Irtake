import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { CourseProvider } from "./CourseContext";
import { AuthProvider } from "./AuthContext";

ReactDOM.render(
  <AuthProvider>
    <CourseProvider>
      <Router>
        <App />
      </Router>
    </CourseProvider>
  </AuthProvider>,
  document.getElementById("root")
);

serviceWorker.register();
