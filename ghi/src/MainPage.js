import { NavLink } from "react-router-dom";
import "./index.css";
import { useAuthContext } from "./components/useToken";
import Carousel from "react-multi-carousel";

function MainPage() {
  const { token } = useAuthContext();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                    className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    <strong>ANIMOB</strong>
                  </h1>
                  {token ? (
                    <div className="text-center p-2">
                      <NavLink
                        to="/profile"
                        className="btn btn-outline-white text-white wow fadeInDown"
                      >
                        Profile
                      </NavLink>
                    </div>
                  ) : (
                    <div className="text-center p-2">
                      <NavLink
                        to="/login"
                        className="btn btn-outline-white text-white wow fadeInDown"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/signup"
                        className="btn btn-outline-white text-white wow fadeInDown"
                      >
                        Signup
                      </NavLink>
                    </div>
                  )}
                  <hr
                    class="hr-light my-4 wow fadeInDown"
                    data-wow-delay="0.4s"
                  ></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="editcaro">
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
                  <h5 className="card-title">Naruto</h5>
                  <div className="btn btn-primary" to={`/anime-detail/naruto`}>
                    See Details
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Toyko Ghoul</h5>
                  <div className="btn btn-primary" to={`/anime-detail/naruto`}>
                    See Details
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Jujutsu Kaisen</h5>
                  <div className="btn btn-primary" to={`/anime-detail/naruto`}>
                    See Details
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Attack on Titan</h5>
                  <div className="btn btn-primary" to={`/anime-detail/naruto`}>
                    See Details
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Black Clover</h5>
                  <div className="btn btn-primary" to={`/anime-detail/naruto`}>
                    See Details
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card" id="editcard">
                <img
                  src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                  className="card-img-top"
                  alt=""
                  id="animeimage"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">Hunter x Hunter</h5>
                  <div className="btn btn-primary" to={`/anime-detail/naruto`}>
                    See Details
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MainPage;
