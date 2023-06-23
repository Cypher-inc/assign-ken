import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import '../node_modules/react-bootstrap'
import Button from "react-bootstrap/Button";
import NavbarComp from "./comps/Nav";
import Trust from "./comps/Trust";
import Images from "./comps/Images";

function App() {
  return (
    <div className="App">
      <NavbarComp className="Navbar1"></NavbarComp>
      <div class="container mt-5 mb-5 cont-main">
        <div class="row">
          <div class="col-12 col-md-6 mt-5 left-cont">
            <h1 className="intro-h1">
              Run your <h className='mobile-p'>Sales Compensation</h> programs in Cruise Mode!
            </h1>
            <p className="mt-4 intro-p">
              Build, run and automate your incentive compensation plans to
              create transparency and achieve operational efficiency.
            </p>
            <Button className="mt-4 mb-5 btn-connect red-btn" variant="danger">
              Lets Connect!
            </Button>
            <div class="input-group mb-3 mobile mt-5 mb-5">
              <input
                type="text"
                class="form-control "
                placeholder="Enter your work email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              ></input>
              <button
                class="btn btn-danger"
                type="button"
                id="button-addon2"
              >
                BOOK A DEMO
              </button>
            </div>
            <div className="mobile container my-3">
              <div className="row">
                <Images className="hidden"></Images>
              </div>
            </div>

            <Trust></Trust>
          </div>

          <div class="col-12 col-md-6 cont-2">
            <Images></Images>

            <img
              alt=""
              src={require("./comps/Assets/Desk/hero image.png")}
              width="300"
              height="400"
              className="hero-img d-inline-block align-top"
            />
          </div>
        </div>
      </div>

      {/* <Button>Hi</Button> */}
    </div>
  );
}

export default App;
