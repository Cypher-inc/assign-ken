const Images = () => {
  return (
    <>
      <div class="container">
        <div class="row row-cols-2">
          <div class="col">
            <img
              alt=""
              src={require("./Assets/Desk/Gartner rating home page.png")}
              width="180"
              height="70"
              className="d-inline-block align-top gartner"
            />
          </div>
          <div class="col">
            <img
              alt=""
              src={require("./Assets/Desk/G2 rating home page.png")}
              width="150"
              height="60"
              className="d-inline-block align-top g2"
            />
          </div>
          <div class="col">
            <img
              alt=""
              src={require("./Assets/Desk/SalesCompensation_EasiestToDoBusinessWith_Enterprise_EaseOfDoingBusinessWith copy.png")}
              width="140"
              height="150"
              className="d-inline-block align-top early"
            />
          </div>
          <div class="col">
            <img
              alt=""
              src={require("./Assets/Desk/SalesCompensation_HighPerformer_HighPerformer copy.png")}
              width="140"
              height="150"
              className="d-inline-block align-top high"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Images;
