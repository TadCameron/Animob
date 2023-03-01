import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../components/useToken";

function Profile() {
    const [favorites, setFavorites] = useState([]);
    const { token } = useAuthContext();

    const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/favorites/`, {
        credentials: "include",
      });

        if (response.ok) {
            const data = await response.json();
            setFavorites(data.favorites);
        }
    }

        useEffect(() => {
        getData()
    }, [])




return (
  <>
    <div className="mainpagecontainer">
      <div className="row row-cols-2 row-cols-md-3 g-4">
        <div class="container text-center my-3">
          <h2 class="font-weight-light">Bootstrap Multi Slide Carousel</h2>
          <div class="row mx-auto my-auto">
            <div
              id="recipeCarousel"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  {/* <div class="col-md-3"> */}
                    {favorites.map((anime) => {
                      return (
                        <div key={anime.animeId}>
                          <div className="col d-flex justify-content-center">
                            <div className="card" id="animecard">
                              <img
                                src={anime.animeImg}
                                className="card-img-top"
                                alt=""
                                id="animeimage"
                              ></img>
                              <div className="card-body">
                                <h5 className="card-title">
                                  {anime.animeTitle}
                                </h5>
                                <Link
                                  className="btn btn-primary"
                                  to={`/anime-detail/${anime.animeId}`}
                                >
                                  See Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Profile
