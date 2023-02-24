import { useToken } from './useToken';

function Logout() {
  const { token, logout } = useToken();

  function handleLogout() {
    logout();
  }

  return (
    <div>
        <div className="accountpagecontainer">
          <div className="card" >
            <form onSubmit={handleLogout}>
            <h5 className="card-title">LOGOUT</h5>
            <p>Are you sure you want to log out?</p>
            <button onClick={handleLogout}>Log out</button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Logout;
