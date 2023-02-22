import { AuthProvider, useToken } from './store/useTokenSlice'
import { useNavigate } from 'react-router-dom';


function GetToken() {
    // Get token from JWT cookie (if already logged in)
    useToken();
    return null
}

function App() {
  const navigate = useNavigate();

  return (
    <AuthProvider>
      <GetToken />
      {/* All of your other components, here */}
    </AuthProvider>
  );
}

export default App;
