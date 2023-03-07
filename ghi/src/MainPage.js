import { NavLink } from "react-router-dom";
import "./index.css";
import { useAuthContext } from "./components/useToken";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

function MainPage() {
  const { token } = useAuthContext();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="mainpagecontainer">
        <div
          className="px-5 py-2 my-5 text-light position-absolute"
          id="main-view"
        >
          <h1 className="display-1 fw-bold text-center"></h1>
          <div className="mask rgba-black-light align-items-center">
            <div className="container-center">
              <div className="row">
                <div className="col white-text text-center">
                  <h1
                    className="h1-reponsive mb-0 pt-md-5 pt-5 wow fadeInDown"
                    id="animob"
                    data-wow-delay="0.3s"
                  >
                    <strong>ANIMOB</strong>
                  </h1>
                  {token ? (
                    <div className="text-center p-2">
                      <NavLink
                        to="/profile"
                        className="btn btn-outline-white text-white wow fadeInDown"
                        id="websitefont"
                      >
                        Profile
                      </NavLink>
                    </div>
                  ) : (
                    <div className="text-center p-2">
                      <NavLink
                        to="/login"
                        className="btn btn-outline-white text-white wow fadeInDown"
                        id="websitefont"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/signup"
                        className="btn btn-outline-white text-white wow fadeInDown"
                        id="websitefont"
                      >
                        Signup
                      </NavLink>
                    </div>
                  )}
                  <hr
                    className="hr-light my-4 wow fadeInDown"
                    data-wow-delay="0.4s"
                  ></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"></hr>
        <div className="row" id="editcaro">
          <div id="editheading"> EDITOR'S PICKS</div>
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
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title" id="cardtitles">
                    Naruto
                  </h5>
                  <Link className="btn btn-dark" to={"/anime-detail/naruto"}>
                    See Details
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://gogocdn.net/images/summer/Tokyo%20Ghoul.jpg"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title" id="cardtitles">
                    Toyko Ghoul
                  </h5>
                  <Link
                    className="btn btn-dark"
                    to={"/anime-detail/tokyo-ghoul"}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://gogocdn.net/cover/jujutsu-kaisen-tv.png"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title" id="cardtitles">
                    Jujutsu Kaisen
                  </h5>
                  <Link
                    className="btn btn-dark"
                    to={"/anime-detail/jujutsu-kaisen-tv-dub"}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://gogocdn.net/cover/chainsaw-man.png"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title" id="cardtitles">
                    Chainsaw Man
                  </h5>
                  <Link
                    className="btn btn-dark"
                    to={"/anime-detail/chainsaw-man"}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://gogocdn.net/cover/black-clover-tv-dub.png"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title" id="cardtitles">
                    Black Clover
                  </h5>
                  <Link
                    className="btn btn-dark"
                    to={"/anime-detail/black-clover-tv-dub"}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title" id="cardtitles">
                    Hunter x Hunter
                  </h5>
                  <Link
                    className="btn btn-dark"
                    to={"/anime-detail/hunter-x-hunter-2011-dub"}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="card" id="editcard">
              <img
                src="https://gogocdn.net/cover/kimetsu-no-yaiba.png"
                className="card-img-top"
                alt=""
                id="animeimage"
              ></img>
              <div className="card-body">
                <h5 className="card-title" id="cardtitles">
                  Demon Slayer
                </h5>
                <Link
                  className="btn btn-dark"
                  id="websitefont"
                  to={"/anime-detail/kimetsu-no-yaiba"}
                >
                  See Details
                </Link>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MainPage;
