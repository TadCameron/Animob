import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./anime.css";

function AnimeDetail(props) {
  const [detail, setDetail] = useState({});
  const [airing, setAiring] = useState([]);
  const { animeTitle } = useParams();

  const getData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/anime-details/?name=${animeTitle}`
    );
    if (response.ok) {
      const data = await response.json();
      setDetail(data);
    }
  };

  const getAiring = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/top-airing`
    );
    if (res.ok) {
      console.log(res);
      const data1 = await res.json();
      console.log(data1);
      setAiring(data1);
    }
  };
  useEffect(() => {
    getData();
    getAiring();
  }, []);

  return (
    <>
      <div className="container" id="one">
        <div className="row">
          <div className="col-8" id="maincontent">
            <hr className="my-4"></hr>
            <h1 className="display-4">{detail.animeTitle}</h1>
            <hr className="my-4"></hr>
            <h4>TAGS</h4>
            <h5 className="lead">{detail.genres}</h5>
            <hr className="my-4"></hr>
            <h2>
              <img src={detail.animeImg} alt="" />
            </h2>
            <hr className="my-4"></hr>
            <h5>SYNOPSIS</h5>
            <p className="lead">{detail.synopsis}</p>
          </div>
          <div className="col-4" id="sidebar">
            <h3 id="airing">Fans also enjoy...</h3>
            {airing.map((anime) => {
              return (
                <div key={anime.animeId}>
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
                        to={`/anime-detail/${anime.animeId}`}
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeDetail;
