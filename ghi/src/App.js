import { AuthProvider, useAuthContext} from './components/useToken'
import Nav from './Nav'
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import Logout from './components/Logout';
import SignupForm from './components/signup';

function GetToken() {
  const { token } = useAuthContext();
    return null
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Nav />
      <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
          <GetToken />
      </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
