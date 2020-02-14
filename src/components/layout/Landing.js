import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pie from "../ChartJS/Pie";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="col s12 center-align">
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Ingresa</b> a login/auth app with the{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
                scratch
              </h4>
              <p className="flow-text grey-text text-darken-1">
                Bienvenido a mi nuevo sistema de ingreso
              </p>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h1>Las tecnologías más usadas</h1>
              <Pie
                data={[1035, 1342, 283]}
                labels={["Angular", "React", "Vue"]}
                title={"Frameworks"}
                color={["rgb(145, 151, 174)", "#f02d3a", "#273043"]}
              ></Pie>
              <figcaption>Datos de Medium</figcaption>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Landing;
