import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../components/useToken";
import FavoritesIcon from "./favoritesIcon";
import DeleteIcon from "./deleteIcon";

function AnimeByGenre(props) {
  const [genreName, setGenre] = useState([]);
  const { genre } = useParams();

  const getData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/genres/${genre}`,
      {
        credentials: "include",
      }
    );

    if (response.ok) {
      let data = await response.json();
      setGenre(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="genrecontainer">
        <div className="row row-cols-2 row-cols-md-3 g-4">
          {genreName.map((anime) => {
            return (
              <div key={anime.animeId}>
                <div className="col d-flex justify-content-center">
                  <div className="card" id="animecard">
                    <img
                      src={anime.animeImg}
                      className="card-img-top"
                      alt=""
                      id="animeimage"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{anime.animeTitle}</h5>
                      <Link
                        className="btn btn-dark"
                        id="websitefont"
                        to={`/anime-detail/${anime.animeId}`}
                      >
                        See Details
                      </Link>
                      <FavoritesIcon
                        className="btn btn-primary"
                        getData={props.getData}
                        favorites={props.favorites}
                        animeId={anime.animeId}
                        animeTitle={anime.animeTitle}
                        animeImg={anime.animeImg}
                      />
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

export default AnimeByGenre;
