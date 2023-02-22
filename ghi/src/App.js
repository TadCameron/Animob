import { AuthProvider, useToken } from './components/useToken'
import './App.css';

function GetToken() {
    // Get token from JWT cookie (if already logged in)
    useToken();
    return null
}

function App() {
;

  return (
    <AuthProvider>
      <GetToken />
      {/* All of your other components, here */}
    </AuthProvider>
  );
}

export default App;
