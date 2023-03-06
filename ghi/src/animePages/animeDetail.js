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
      <div className="container" >
        <div className="box">
          <div className="product_img">
            <img src={detail.animeImg} alt="" />
          </div>

          <div className="product_disc">
            <div className="product_disc_content">
              <div className="disc_content_about">
                <h1>{detail.animeTitle}</h1>
                <span>{detail.genres}</span>
                <p>{detail.synopsis}</p>
              </div>

              <div className="product__view--more">
                <p>view all specifications</p>
                <div className="view__more--block"></div>
              </div>
            </div>
          </div>

          <button className="btn wishlist">wishlist</button>
          <button className="btn buy">buy</button>
        </div>
      </div>
    </>
  );
}

export default AnimeDetail;
