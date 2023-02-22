import { AuthProvider, useAuthContext} from './components/useToken'
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';

function GetToken() {
  const { token } = useAuthContext();
    return null
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <GetToken />

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
