import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.css";
import Course from "./components/course/CourMain";
import InstMain from "./components/institution/InstMain";
import StuMain from "./components/student/StuMain";
import SecMain from "./components/section/SecMain";
import ModMain from "./components/module/ModMain";
import LessMain from "./components/lesson/LessMain";
import Main from "./components/Main";
import logo from "./logo.png";
import Login from "./components/Login";
import Password from "./components/Password";
import { AuthContext } from "./AuthContext";
import { useHistory } from "react-router-dom";
import Default from "./components/Default";
function App() {
  const authContext = useContext(AuthContext);
  let history = useHistory();
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    authContext.setAuth("");
    history.push("/login");
  }
  return (
    <div
      className="container text-right border mt-2 shadow-lg rounded"
      style={{ backgroundColor: "#e4c2c1" }}
    >
      <div className="row mt-3">
        <div className="col-md-2">
          <img src={logo} className="mr-auto" />
        </div>
        {authContext.auth ? (
          <div className="col-md-2">
            <h4 className="btn loginbtn" onClick={logout}>
              سجل خروج
            </h4>
          </div>
        ) : (
          ""
        )}
        {authContext.auth ? (
          <div className="col-md-1">
            <Link to="/">
              <i className="fas fa-arrow-up	fa-2x text-dark"></i>{" "}
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="col-md-7">
          {" "}
          <h1 className="mr-2">لوحة التحكم</h1>
        </div>
      </div>
      <hr />

      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute
          exact
          path="/"
          component={Main}
          auth={localStorage.getItem("token")}
        />
        <PrivateRoute
          path="/lesson"
          component={LessMain}
          auth={localStorage.getItem("token")}
        />

        <PrivateRoute
          path="/module"
          component={ModMain}
          auth={localStorage.getItem("token")}
        />
        <PrivateRoute
          path="/section"
          component={SecMain}
          auth={localStorage.getItem("token")}
        />
        <PrivateRoute
          path="/course"
          component={Course}
          auth={localStorage.getItem("token")}
        />
        <PrivateRoute
          path="/institution"
          component={InstMain}
          auth={localStorage.getItem("token")}
        />
        <PrivateRoute
          path="/student"
          component={StuMain}
          auth={localStorage.getItem("token")}
        />
        <PrivateRoute
          path="/password"
          component={Password}
          auth={localStorage.getItem("token")}
        />
        <Route component={Default} />
      </Switch>
    </div>
  );
}
function PrivateRoute({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

export default App;
