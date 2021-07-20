import { NavLink } from "react-router-dom";
import { useState } from "react";
import registerImg from "../images/registerImg.jpg";

function Register() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  const getRepeatPassword = (event) => {
    setRepeatPassword(event.target.value);
  };

  const onSubmit = (event) => {
    if (password !== "" && repeatPassword !== "") {
      if (password.length >= 8) {
        if (repeatPassword !== password) {
          alert("Both passwords are not matching. Please try again!");
          event.preventDefault();
        }
      }
    }
  };

  return (
    <div className="container text-dark px-5">
      <nav className="">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink class="pageLink" exact to="/">
              Home
            </NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Login
          </li>
        </ol>
      </nav>

      <h5 className="mb-1">Register:</h5>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-5">
          <form
            className="g-3"
            id="register-form"
            onSubmit={onSubmit}
            action=""
          >
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
                pattern="(?=.*[a-z]).{8,}$"
                title="Must contain minimum 8 symbols"
                onChange={getPassword}
                value={password}
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
                pattern="(?=.*[a-z]).{8,}$"
                title="Must contain minimum 8 symbols"
                onChange={getRepeatPassword}
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
                className="fw-bold btn btn-danger submit"
                type="submit"
                value="Register"
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
