import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./anime.css";

function AnimeDetail(props) {
  const [detail, setDetail] = useState({});
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="detailcontainer">
        <div className="detail">
          <figure className="image-left">
            <img
              src={detail.animeImg}
              className="img"
              alt="..."
              id="image-left"
            ></img>
            <figcaption>
              <h5 className="title" id="cardtitles">
                {detail.animeTitle}
              </h5>
              <hr
                className="hr-light my-4 wow fadeInDown"
                data-wow-delay="0.4s"
              ></hr>
              <p className="text" id="websitefont">
                {detail.synopsis}
              </p>
              <hr
                className="hr-light my-4 wow fadeInDown"
                data-wow-delay="0.4s"
              ></hr>
              <p className="text" id="websitefont">
                <small className="text-muted">{detail.genres}</small>
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default AnimeDetail;
