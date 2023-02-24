import { NavLink } from "react-router-dom"
import './index.css';

function MainPage() {
  return (
    <>

    <div className="mainpagecontainer">
      <div className="px-5 py-2 my-5 text-light position-absolute" id="main-view">
        <h1 className="display-1 fw-bold text-center"></h1>
          <div className="mask rgba-black-light align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-4 white-text text-center">
                    <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>ANIMOB</strong></h1>
                    <div className="text-center p-2">
                        <NavLink to="/login" className="btn btn-outline-white text-white wow fadeInDown">Login</NavLink>
                        <NavLink to="/signup" className="btn btn-outline-white text-white wow fadeInDown">Signup</NavLink>
                    </div>
                    <hr class="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"></hr>
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
