import { useState, useEffect } from "react";
import { useToken } from "./useToken";
import anime from "animejs";

function SignupForm() {
  const { token, signup } = useToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    signup(username, password, full_name, email);
  }

  useEffect(() => {
    var current = null;
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const submit = document.querySelector("#submit");

    const handleNameFocus = () => {
      if (current) {
        current.pause();
      }
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: 700,
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
    const handleEmailFocus = () => {
      if (current) {
        current.pause();
      }
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: 336,
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
    name.addEventListener("focus", handleNameFocus);
    email.addEventListener("focus", handleEmailFocus);
    username.addEventListener("focus", handleUsernameFocus);
    password.addEventListener("focus", handlePasswordFocus);
    submit.addEventListener("focus", handleSubmitFocus);

    return () => {
      name.removeEventListener("focus", handleNameFocus);
      email.removeEventListener("focus", handleEmailFocus);
      username.removeEventListener("focus", handleUsernameFocus);
      password.removeEventListener("focus", handlePasswordFocus);
      submit.removeEventListener("focus", handleSubmitFocus);
    };
  }, []);

  return (
    <div className="page">
      <div className="container" id="right1">
        <div className="left">
          <div className="login">Signup</div>
          <div className="eula">
            By signing up you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </svg>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="name"

              value={full_name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="username"

              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <input id="submit" type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignupForm;
