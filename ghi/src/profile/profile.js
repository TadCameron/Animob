import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../components/useToken";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FavoritesIcon from "../animePages/favoritesIcon";
import DeleteIcon from "../animePages/deleteIcon";

function Profile(props) {
  const [favorites, setFavorites] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const { token } = useAuthContext();

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
  const getRecommended = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/popular`,
      {
        credentials: "include",
      }
    );

    if (res.ok) {
      const data1 = await res.json();
      setRecommended(data1);
      console.log(recommended);
    }
  };
  useEffect(() => {
    getRecommended();
    getData();
  }, []);

  let favCarousel = favorites.map(function (anime) {
    return (
      <div key={anime.animeId}>
        <div className="col d-flex justify-content-center">
          <div className="card" id="profilecard">
            <img
              src={anime.animeImg}
              className="card-img-top"
              alt=""
              id="animeimage"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{anime.animeTitle.slice(0, 20)}</h5>
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
  });
  let recCarousel = recommended.map(function (anime) {
    return (
      <div key={anime.animeId}>
        <div className="col d-flex justify-content-center">
          <div className="card" id="profilecard">
            <img
              src={anime.animeImg}
              className="card-img-top"
              alt=""
              id="animeimage"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{anime.animeTitle.slice(0, 20)}</h5>
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
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="mainpagecontainer">
        <div className="d-flex flex-column">
          <div>Hi</div>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {favCarousel}
          </Carousel>

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {recCarousel}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Profile;
