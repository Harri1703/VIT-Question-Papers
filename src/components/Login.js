import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);
  console.log(password);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: username,
        password: password,
        loggedin: true,
      })
    );
  };
  return (
    <div
      style={{
        height: "90vh",
      }}
      class="container p-3"
    >
      <div class="row h-100">
        <div class="col-md-6 my-auto">
          <h1>VIT Question Papers</h1>
          <h3>We help you to get your question papers!</h3>
        </div>
        <div class="col-md-6 my-auto">
          <form
            action=""
            class="border p-2 rounded shadow-lg"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div class="row gy-3 mb-1">
              <h2 class="text-center">Sign in</h2>
            </div>
            <div class="row gy-3 mb-3">
              <div class="col-md-12">
                <label for="vitmail">Username</label>
                <input
                  type="email"
                  id="vitmail"
                  placeholder="enter your vit email"
                  class="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="row gy-3 mb-3">
              <div class="col-md-12">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="row gy-3 mb-3">
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary w-100">
                  Log in
                </button>
              </div>
            </div>
            <div class="row gy-3 mb-3">
              <div class="col-md-12 text-center">
                <a href="forgot.html">Forgotten password?</a>
              </div>
            </div>
            <div class="row gy-3 mb-3  justify-content-center">
              <div class="col-md-10">
                <hr />
              </div>
            </div>
            <div class="row gy-3 mb-3 justify-content-center">
              <div class="col-md-6 text-center">
                <NavLink className="nav-link" to="/signup">
                  <button type="button" class="btn btn-success w-100">
                    Create new account
                  </button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
