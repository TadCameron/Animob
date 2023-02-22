import { AuthProvider, useToken } from './components/useToken'
import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom';

function GetToken() {
  const { token } = useToken();
    return null
}

function App() {
;

  return (
    <AuthProvider>
      <BrowserRouter>

          <GetToken />
       
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
