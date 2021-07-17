import { NavLink } from "react-router-dom";
import "./Style2.css";
import registerImg from "../images/registerImg.jpg";

function Register() {
  return (
    <div className="container text-dark mt-4">
      <h3 className="mb-4">Register:</h3>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-4 offset-1">
          <form className="g-3" id="register-form" action="">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Username*"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password*"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password-repeat"
                name="passwordrepeat"
                placeholder="Repeat Password*"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="first-name"
                name="firstname"
                placeholder="First Name*"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                id="select-country"
                name="selectcountry"
                required
              >
                <option selected disabled>
                  Country*
                </option>
                <option>Latvia</option>
                <option>Lithuania</option>
                <option>Estonia</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <label className="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions*
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="invalidCheck2"
                  required
                />
              </div>
            </div>
            <div className="d-grid mb-3">
              <input
                className="fw-bold btn btn-warning submit"
                type="submit"
                value="Submit form"
              />
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 ">
          <img
            className="img-fluid rounded border"
            src={registerImg}
            style={{ maxWidth: "60%" }}
            alt="cat-image"
          />
        </div>
      </div>
    </div>
  );
}
export default Register;
