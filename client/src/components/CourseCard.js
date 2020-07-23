import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CourseCard extends Component {
  render() {
    const { id, name, classname, img } = this.props.course;
    return (
      <div className="mx-auto col-md-4 my-3 ">
        <Link
          to={{
            pathname: `/course/${name}`,
          }}
          class="text-decoration-none"
        >
          <div className="card text-right">
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <h5 className="text-secondary">{classname}</h5>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
