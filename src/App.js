import React from "react";
import Bookings from "./Bookings";
import Footer from "./footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

function Heading() {
  return (
    <div className="HeaderBoth">
      <img
        className="Logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo"
        height="50"
        width="50"
      />
      <header className="App-header">CYF Hotel</header>
    </div>
  );
}

function TouristInfoCards() {
  return (
    <div className="card" class="row">
      <div className="card1" class="col-sm-4">
        <img
          src="https://i1.wp.com/www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg?w=1024&ssl=1"
          alt="Glasgow City"
          className="card-img-top"
          height="300"
        />
        <div className="card-body" class="col text-center">
          <p>Glasgow is lovely! Isn't it?</p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card2" class="col-sm-4">
        <img
          src="https://www.aboutmanchester.co.uk/wp-content/uploads/2020/06/DDCCD1FC-B7A7-4939-9EE1-8BD9274D8CCB.jpeg"
          alt="Manchester City"
          className="card-img-top"
          height="300"
        />
        <div className="card-body" class="col text-center">
          <p>Manchester is lovely! I think?</p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card3" class="col-sm-4">
        <img
          src="https://london.ac.uk/sites/default/files/styles/promo_large/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=BMaDUhjp"
          alt="London City"
          className="card-img-top"
          height="300"
        />
        <div className="card-body" class="col text-center">
          <p>London is lovely! Said no one. Ever.</p>
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
