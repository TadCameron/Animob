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
      <div className="detailcontainer">
        <div className="detail">
          <figure class="image-left">
            <img src={detail.animeImg} class="img" alt="..."  id="image-left"></img>
            <figcaption>
              <h5 class="title">{detail.animeTitle}</h5>
              <p class="text">{detail.synopsis}</p>
              <p class="text">
                <small class="text-muted">{detail.genres}</small>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default AnimeDetail;
