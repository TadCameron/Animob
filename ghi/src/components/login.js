import { useToken } from "./useToken";
import { useState, useEffect } from "react";
import "./accounts.css";
import anime from "animejs";

function Login() {
  const { token, login } = useToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    login(username, password);
  }


  useEffect(() => {
    var current = null;
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const submit = document.querySelector("#submit");

    const handleUsernameFocus = () => {
      if (current) {
        current.pause();
      }
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    };

    const handlePasswordFocus = () => {
      if (current) {
        current.pause();
      }
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    };

    const handleSubmitFocus = () => {
      if (current) {
        current.pause();
      }
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "530 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    };

    username.addEventListener("focus", handleUsernameFocus);
    password.addEventListener("focus", handlePasswordFocus);
    submit.addEventListener("focus", handleSubmitFocus);

    return () => {
      username.removeEventListener("focus", handleUsernameFocus);
      password.removeEventListener("focus", handlePasswordFocus);
      submit.removeEventListener("focus", handleSubmitFocus);
    };
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login">Login</div>
          <div className="eula">
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                inkscapecollect="always"
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  style={{ stopColor: "#ff00ff" }}
                  offset="0"
                  id="stop876"
                />
                <stop
                  style={{ stopColor: "#ff0000" }}
                  offset="1"
                  id="stop878"
                />
              </linearGradient>
            </defs>
            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </svg>

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input id="submit" type="submit">

            </input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
