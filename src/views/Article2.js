import { NavLink } from "react-router-dom";
import { useState } from "react";
import image2 from "../images/t3.jpg";
import image3 from "../images/t2.jpg";
import image4 from "../images/t1.webp";
import { SRLWrapper } from "simple-react-lightbox";

function Article2() {
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
          style={{ maxWidth: "100%", marginBottom: "10px" }}
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
              All about tops
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
                    width: "250px",
                    height: " 300px",
                    marginLeft: "30px",
                  }}
                  src={BigImage}
                  alt=""
                />
              </div>
            </div>
            <SRLWrapper>
              <div className="row pt-3">{imagesList}</div>
            </SRLWrapper>
          </div>

          <div className="col-10 col-md-8">
            <p className="p3">
              The A-line shape is characteristic of a silhouette that gradually
              widens towards the hemline, giving the impression of the shape of
              a capital A. The best part about this type of top is that it suits
              almost all body types. Not too fitted, not too loose, an A-line
              top will be perfect for any occasion.
            </p>
            <p className="p3">
              A blouson top or a blouse is typically a flowing type of top for
              women with a fitted or elasticated waistband and is anything but
              basic. These babies look the best with skinny jeans and
              wide-legged pants alike, and are timeless. Usually, a blouson top
              comes with three-fourth length or long sleeves, but it can also
              come with a statement-making sleeve style.
            </p>

            <p className="p3">
              A bodysuit is a one-piece, form-fitting garment that covers the
              torso and the crotch. You can think of its style like that of a
              swimsuit. The best part about a bodysuit is that it doubles up as
              a body shaper, while staying stylish. Team it with any kind of
              bottoms and enjoy your day carefreely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Article2;
