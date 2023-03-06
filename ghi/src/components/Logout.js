import { useToken } from "./useToken";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const { token, logout } = useToken();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  // useEffect(() => {
  //   var current = null;
  //   const submit = document.querySelector("#submit");

  //   const handleSubmitFocus = () => {
  //     if (current) current.pause();
  //     current = anime({
  //       targets: "path",
  //       strokeDashoffset: {
  //         value: -730,
  //         duration: 700,
  //         easing: "easeOutQuart",
  //       },
  //       strokeDasharray: {
  //         value: "530 1386",
  //         duration: 700,
  //         easing: "easeOutQuart",
  //       },
  //     });
  //   };

  //   submit.addEventListener("focus", handleSubmitFocus);

  //   return () => {
  //     submit.removeEventListener("focus", handleSubmitFocus);
  //   };
  // }, []);

  return (
    <div>
      <div className="logoutcontainer">
        <div className="card">
          <h5 className="card-title">LOGOUT</h5>
          <p>Are you sure you want to log out?</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
