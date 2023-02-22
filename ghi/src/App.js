import { AuthProvider, useAuthContext} from './components/useToken'
import Nav from './Nav'
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';

function GetToken() {
  const { token } = useAuthContext();
    return null
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Nav />
      <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          <GetToken />
      </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
