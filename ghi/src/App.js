import { AuthProvider, useAuthContext } from './components/useToken'
import './App.css';
import { BrowserRouter} from 'react-router-dom';

function GetToken() {
  const { token } = useAuthContext();
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
