import { NavLink } from "react-router-dom";
import "./index.css";
import { useAuthContext } from "./components/useToken";

function MainPage() {
  const { token } = useAuthContext();

  return (
    <>
      <div className="mainpagecontainer">
        <div
          className="px-5 py-2 my-5 text-light position-absolute"
          id="main-view"
        >
          <h1 className="display-1 fw-bold text-center"></h1>
          <div className="mask rgba-black-light align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-8 white-text text-center">
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
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card" id="profilecard">
                    <img
                      src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                      className="card-img-top"
                      alt=""
                      id="animeimage"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">Naruto</h5>
                      <div
                        className="btn btn-primary"
                        to={`/anime-detail/naruto`}
                      >
                        See Details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card" id="profilecard">
                    <img
                      src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                      className="card-img-top"
                      alt=""
                      id="animeimage"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">Naruto</h5>
                      <div
                        className="btn btn-primary"
                        to={`/anime-detail/naruto`}
                      >
                        See Details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card" id="profilecard">
                    <img
                      src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                      className="card-img-top"
                      alt=""
                      id="animeimage"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">Naruto</h5>
                      <div
                        className="btn btn-primary"
                        to={`/anime-detail/naruto`}
                      >
                        See Details
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card" id="profilecard">
                    <img
                      src="https://flxt.tmsimg.com/assets/p194893_b_v9_ac.jpg"
                      className="card-img-top"
                      alt=""
                      id="animeimage"
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">Naruto</h5>
                      <div
                        className="btn btn-primary"
                        to={`/anime-detail/naruto`}
                      >
                        See Details
                      </div>
                    </div>
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

export default MainPage;
