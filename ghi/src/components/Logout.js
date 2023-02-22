import { useToken } from './useToken';

function Logout() {
  const { token, logout } = useToken();

  function handleLogout() {
    logout();
  }

  return (
    <div>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Logout;
