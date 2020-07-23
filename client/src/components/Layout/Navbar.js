import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { CourseContext } from "./../../CourseContext";
import logo from "./../../img/logo.png";
import { AuthContext } from "./../../AuthContext";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const courseContext = useContext(CourseContext);

  let history = useHistory();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("number");
    localStorage.removeItem("inst");
    localStorage.removeItem("state");
    localStorage.removeItem("name");

    authContext.setAuth("");
    history.push("/login");
  }
  useEffect(() => {
    console.log(courseContext.isst, authContext.auth);
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink
        className="navbar-brand wow flash"
        activeClassName="active"
        to="/u"
      >
        <img src={logo} />{" "}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMenue"
        aria-controls="navbarMenue"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-3" id="navbarMenue"></div>
      <div className="collapse navbar-collapse" id="navbarMenue">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink
              to="/contactus"
              activeClassName="active"
              className="nav-link"
            >
              تواصل معنا
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink
              to="/courselist"
              activeClassName="active"
              className="nav-link"
            >
              المواد الدراسية{" "}
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/" activeClassName="active" className="nav-link">
              {" "}
              الصفحة الرئيسية
            </NavLink>
          </li>
          {(function () {
            if (authContext.auth) {
              return (
                <li className="nav-item ">
                  <NavLink to="/login" className="mr-auto nav1 ">
                    <ButtonContainer>
                      <span className="mr-2 " onClick={logout}>
                        سجل خروج <i className="	fas fa-user-graduate"></i>
                      </span>
                    </ButtonContainer>
                  </NavLink>
                </li>
              );
            } else {
              return (
                <li className="nav-item ">
                  <Link to="/login" className="mr-auto nav1">
                    <ButtonContainer>
                      <span className="mr-2 ">
                        سجل دخول <i className="	fas fa-user-graduate"></i>
                      </span>
                    </ButtonContainer>
                  </Link>
                </li>
              );
            }
          })()}
          {(function () {
            if (!authContext.isst && authContext.auth) {
              return (
                <li className="nav-item ">
                  <NavLink to="/profile" className="mr-auto ">
                    <ButtonContainer>
                      <i className="fas fa-user-circle"></i>
                    </ButtonContainer>
                  </NavLink>
                </li>
              );
            } else if (authContext.auth && authContext.isst) {
              return (
                <li className="nav-item ">
                  <NavLink to="/institution" className="mr-auto ">
                    <ButtonContainer>
                      <i className="fas fa-user-circle"></i>
                    </ButtonContainer>
                  </NavLink>
                </li>
              );
            } else {
              return "";
            }
          })()}
        </ul>
      </div>
    </nav>
  );
}
