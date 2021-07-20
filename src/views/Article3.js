import { NavLink } from "react-router-dom";
import { useState } from "react";
import image2 from "../images/tro3.jpg";
import image3 from "../images/tro2.webp";
import image4 from "../images/tro1.webp";

function Article3() {
  const images = [image2, image3, image4];

  const [BigImage, setImage] = useState(image4);

  const updateImage = (event) => {
    setImage(event.target.src);
  };

  const imagesList = images.map((imgElement) => {
    return (
      <div className="col-4 col-md-4">
        <img
          onClick={updateImage}
          className="imgRow img-fluid"
          style={{ maxWidth: "90%", marginBottom: "10px" }}
          src={imgElement}
          alt=""
        />
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <nav className="mt-2">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NavLink class="pageLink" exact to="/">
                Home
              </NavLink>
            </li>
            <li class="breadcrumb-item" aria-current="page">
              <NavLink class="pageLink" exact to="/articles">
                Articles
              </NavLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              All about trousers
            </li>
          </ol>
        </nav>

        <div className="row pt-3">
          <div className="col-12 col-md-4 ">
            <div className="row">
              <div id="bigDiv">
                <img
                  id="bigImage"
                  style={{
                    width: "230px",
                    height: " 300px",
                    marginLeft: "50px",
                  }}
                  src={BigImage}
                  alt=""
                />
              </div>
            </div>

            <div className="row pt-3">{imagesList}</div>
          </div>

          <div className="col-10 col-md-8">
            <p className="p3">
              You can never go wrong with a pair of palazzo pants as they are
              very fashionable. They are also known to be quite airy. The more
              tailored ones can be worn to the office with a well-fitted shirt.
              They also go well with pumps and stilettos.
            </p>
            <p className="p3">
              Tailored trousers are mostly worn to the office and for formal
              events. They also look very nice as they are well-fitted on the
              body. The only downside is that you have to iron them every time.
            </p>

            <p className="p3">
              Wide-leg pants make your legs look longer. The best ones are tight
              on top and pool over at the bottom. They can be worn anywhere; to
              the office, a party or get them in jeans for your casual
              activities. They help women with slim body types to look more
              well-rounded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Article3;
