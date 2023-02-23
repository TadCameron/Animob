import { AuthProvider, useAuthContext} from './components/useToken'
import MainPage from './MainPage';
import Nav from './Nav'
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/login"
import Logout from './components/Logout';
import SignupForm from './components/Signup';
import AnimeDetail from './animePages/animeDetail';
import GenreList from './animePages/genreList';
import AnimeByGenre from './animePages/AnimeByGenre';


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
            <Route index element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/anime-detail/:animeTitle" element={<AnimeDetail />} />
            <Route path="/genres" element={<GenreList />} />
            <Route path="/genre/:genre" element={<AnimeByGenre />} />
          </Routes>
          <GetToken />
      </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
