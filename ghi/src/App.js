import { AuthProvider, useAuthContext } from "./components/useToken";
import MainPage from "./MainPage";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Logout from "./components/Logout";
import SignupForm from "./components/Signup";
import AnimeDetail from "./animePages/animeDetail";
import GenreList from "./animePages/genreList";
import AnimeByGenre from "./animePages/AnimeByGenre";
import Profile from "./profile/profile";
import { useEffect, useState } from "react";

function GetToken() {
  const { token } = useAuthContext();
  return null;
}

function App() {
  const [favorites, setFavorites] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites/`,
      {
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      setFavorites(data.favorites);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav />
        <div className="container">
          <Routes>
            <Route
              index
              element={<MainPage getData={getData} favorites={favorites} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/anime-detail/:animeTitle" element={<AnimeDetail />} />
            <Route path="/genres" element={<GenreList />} />
            <Route
              path="/genres/:genre"
              element={<AnimeByGenre getData={getData} favorites={favorites} />}
            />
            <Route
              path="/profile"
              element={<Profile favorites={favorites} />}
            />
          </Routes>
          <GetToken />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;


