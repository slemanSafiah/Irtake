import React, { Component } from "react";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Default from "./components/Layout/Default";
import Home from "./components/Home";
import Loading from "./components/Layout/Loading";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logininst from "./components/Logininst";
import Contactus from "./components/Contactus";
import CourseList from "./components/CourseList";
import ChoiceQuiz from "./components/quiz/ChoiceQuiz";
import InputQuiz from "./components/quiz/InputQuiz";
import OrderQuiz from "./components/quiz/OrderQuiz";
import ImageQuiz from "./components/quiz/ImageQuiz";
import WOW from "wowjs";
import Course from "./components/Course";
import Lesson from "./components/Lesson";
import LessonQuiz from "./components/quiz/LessonQuiz";
import ModuleQuiz from "./components/quiz/ModuleQuiz";
import CourseQuiz from "./components/quiz/CousreQuiz";
import Institution from "./components/institution/Main";
import Password from "./components/institution/Password";
import AddSecQuiz from "./components/institution/AddSecQuiz";
import AddModQuiz from "./components/institution/module/ModMain";
import AddLessQuiz from "./components/institution/lesson/LessMain";
import AddCouQuiz from "./components/institution/course/CourMain";
import Student from "./components/institution/Student";
import Profile from "./components/profile/Profile";
class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount = () => {
    new WOW.WOW().init();

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };
  render() {
    return (
      <div className="wow">
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/logininst" component={Logininst} />
              <Route path="/contactus" component={Contactus} />
              <Route path="/courselist" component={CourseList} />
              <Route
                path="/course/:name"
                component={Course}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/lesson/:classname&:course&:module&:lesson"
                component={Lesson}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/institution"
                component={Institution}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/modquiz/:module_name&:course_name&:quiz&:classname"
                component={ModuleQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/lessquiz/:lesson_name&:module_name&:course_name&:quiz&:classname"
                component={LessonQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/couquiz/:course_name&:quiz&:classname"
                component={CourseQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/choicequiz"
                component={ChoiceQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/inputquiz"
                component={InputQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/orderquiz"
                component={OrderQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/imagequiz"
                component={ImageQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/password"
                component={Password}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/addlessquiz"
                component={AddLessQuiz}
                auth={localStorage.getItem("token")}
              />{" "}
              <Route
                path="/addcouquiz"
                component={AddCouQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/addmodquiz"
                component={AddModQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/addsecquiz"
                component={AddSecQuiz}
                auth={localStorage.getItem("token")}
              />
              <Route
                path="/student"
                component={Student}
                auth={localStorage.getItem("token")}
              />
              <PrivateRoute
                path="/profile"
                component={Profile}
                auth={localStorage.getItem("token")}
              />
              <Route component={Default} />
            </Switch>
            <Footer />
            <ScrollUpButton />
          </React.Fragment>
        )}
      </div>
    );
  }
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
