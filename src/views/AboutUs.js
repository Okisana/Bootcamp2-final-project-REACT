import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import team from "../images/team.jpg";
import history from "../images/history.jpg";
import collections from "../images/collections.jpg";
import career from "../images/career.jpg";

import {
  faEnvelopeSquare,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <div className="container">
      <nav className="mt-2">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About us
          </li>
        </ol>
      </nav>

      <div className="tabsContainer">
        <ul
          className="nav nav-pills mb-3 bg-light border-bottom"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item border " role="presentation">
            <button
              className="nav-link tabs active btnColor"
              id="pills-product-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-product"
              type="button"
              role="tab"
              aria-controls="pills-product"
              aria-selected="true"
            >
              Our team
            </button>
          </li>

          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs btnColor"
              id="pills-history-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-history"
              type="button"
              role="tab"
              aria-controls="pills-history"
              aria-selected="true"
            >
              Our history
            </button>
          </li>

          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs btnColor"
              id="pills-address-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-address"
              type="button"
              role="tab"
              aria-controls="pills-address"
              aria-selected="false"
            >
              About collections
            </button>
          </li>

          <li className="nav-item border" role="presentation">
            <button
              className="nav-link tabs btnColor"
              id="pills-summary-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-summary"
              type="button"
              role="tab"
              aria-controls="pills-summary"
              aria-selected="false"
            >
              Careers at OK
            </button>
          </li>
        </ul>

        <div className="tab-content pb-3" id="pills-tabContent">
          {/* Our team TAB */}
          <div
            className="tab-pane fade show active "
            id="pills-product"
            role="tabpanel"
            aria-labelledby="pills-product-tab"
          >
            <div className="row d-flex">
              <div className="col-12 col-md-4">
                <img
                  className="img-fluid"
                  style={{ maxWidth: "70%", marginLeft: "50px" }}
                  src={team}
                />
              </div>

              <div className="col-12 col-md-7">
                <a> Our great team</a>
                <p className="pt-2">
                  OK brand has come a long, long way since we opened back in
                  1969 under the Penneys name in Dublin. Today, we operate in
                  more than 330 stores in 11 countries across Europe and
                  America. But that doesn’t tell the whole story of OK. Here we
                  give you some staggering facts of who we are today. And we
                  hope that this inspires you to join us.
                </p>
              </div>
            </div>
          </div>

          {/*Our History TAB */}
          <div
            className="tab-pane fade show"
            id="pills-history"
            role="tabpanel"
            aria-labelledby="pills-history-tab"
          >
            <div className="row d-flex">
              <div className="col-12 col-md-4">
                <img
                  className="img-fluid"
                  style={{ maxWidth: "70%", marginLeft: "50px" }}
                  src={history}
                />
              </div>

              <div className="col-12 col-md-7">
                <a> Our History</a>
                <div className="pt-2">
                  <p>
                    December 2009 – Bremen, Germany. We now operate over 28
                    stores in Germany
                  </p>
                  <p>
                    September 2015 - Boston, USA. We now operate over 8 stores
                    in the USA, with plans to open in American Dream, New Jersey
                    by the end of 2019. Primark will also open its first store
                    outside of the Northeastern Corridor, in Sawgrass Mills,
                    Miami in 2020.
                  </p>

                  <p>
                    August 2020 – Warsaw, Poland. Primark enters its 13th
                    market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About collections TAB */}
          <div
            className="tab-pane fade"
            id="pills-address"
            role="tabpanel"
            aria-labelledby="pills-address-tab"
          >
            <div className="row d-flex">
              <div className="col-12 col-md-4">
                <img
                  className="img-fluid"
                  style={{ maxWidth: "70%", marginLeft: "50px" }}
                  src={collections}
                />
              </div>

              <div className="col-12 col-md-7">
                <a> Keeping up with demand</a>
                <p className="pt-2">
                  Our fashions fly off the shelves and rails. So we need to get
                  products from suppliers to stores in double quick time. We buy
                  in volume from over 700 suppliers in 37 countries. Since 2013,
                  we have doubled our warehouse capacity and currently operate
                  from eight distribution centres. Our most recent centre opened
                  in summer 2016 in Islip, Northamptonshire, UK and has to be
                  seen to be believed. The site has 1.1 million sq. ft. of space
                  – the equivalent of 17 football pitches. It has 13 miles of
                  aisles.
                </p>
              </div>
            </div>
          </div>

          {/* Careers TAB */}
          <div
            className="tab-pane fade"
            id="pills-summary"
            role="tabpanel"
            aria-labelledby="pills-summary-tab"
          >
            <div className="row d-flex">
              <div className="col-12 col-md-4">
                <img
                  className="img-fluid"
                  style={{ maxWidth: "70%", marginLeft: "50px" }}
                  src={career}
                />
              </div>

              <div className="col-12 col-md-7">
                <a> Careers in OK</a>
                <p className="py-2">
                  Fashion calls for all kinds of people. Product buyers and
                  factory sourcers. Supply chain experts and procurement
                  specialists. You need an ingenious PR team that gets people
                  talking and digital mavericks who get them sharing. You need
                  store builders and the people who finance them. You need all
                  kinds of clever, capable people. Including you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contactContainer container mt-4">
        <div class="row fs-5 mb-4">
          <div class="col-12 col-md-12">Contacts</div>
        </div>

        <div class="row g-0">
          <div class="col-12 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.97553756886!2d24.119608415459204!3d56.94922038089023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd324bd81f5%3A0xc69c7fd6be4fe652!2zTWFyaWphcyBpZWxhIDksIENlbnRyYSByYWpvbnMsIFLEq2dhLCBMVi0xMDUwLCDQm9Cw0YLQstC40Y8!5e0!3m2!1sru!2sus!4v1619012561193!5m2!1sru!2sus"
              style={{
                width: "auto",
                height: "300px",
              }}
            ></iframe>
          </div>
          <div class="col-12 col-md-6">
            <div class="card-body">
              <p class="card-text articleText">
                <div class="fs-5">Address:</div>
                <div className="pb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <b> Marijas iela 9, Rīga, LV-1050 </b>
                </div>
                <div class="fs-5">Email:</div>
                <div className="pb-2">
                  <FontAwesomeIcon icon={faEnvelopeSquare} />
                  <b> info@ok.com</b>
                </div>
                <div class="fs-5">Phone:</div>
                <div className="pb-2">
                  <FontAwesomeIcon icon={faPhone} />
                  <b> +371 28431277</b>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
