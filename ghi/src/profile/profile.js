import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../components/useToken";

function Profile() {
    const [favorites, setFavorites] = useState([]);
    const { token } = useAuthContext();

    const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites/`);

        if (response.ok) {
            const data = await response.json();
            setFavorites(data);
        }
    }

        useEffect(() => {
        getData()
    }, [])


return (
    <>
    <div className="genrecontainer">
        <div className="row row-cols-2 row-cols-md-3 g-4">
            {favorites.map(anime => {
            return (
                <div key={anime.animeId}>
                    <div className="col d-flex justify-content-center">
                        <div className="card" id="animecard">
                            <img src={anime.animeImg} className="card-img-top" alt="" id="animeimage"></img>
                                <div className="card-body">
                                <h5 className="card-title">{anime.animeTitle}</h5>
                                <Link className="btn btn-primary" to={`/anime-detail/${anime.animeId}`}>See Details</Link>
                                </div>
                        </div>
                    </div>
                </div>
            );
            })}
            </div>
        </div>
        </>
    );
}

export default Profile
