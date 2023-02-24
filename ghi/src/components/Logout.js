import { useToken } from './useToken';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const { token, logout } = useToken();
  const navigate = useNavigate()

  async function handleLogout() {
    await logout();
    navigate('/')
  }

  return (
    <div>
        <div className="accountpagecontainer">
          <div className="card" >
      
            <h5 className="card-title">LOGOUT</h5>
            <p>Are you sure you want to log out?</p>
            <button onClick={handleLogout}>Log out</button>

          </div>
        </div>
    </div>
  );
}

export default Logout;
