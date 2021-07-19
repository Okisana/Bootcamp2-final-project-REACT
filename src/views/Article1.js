import { NavLink } from "react-router-dom";
import { useState } from "react";
import image2 from "../images/Doffshoulder.jpg";
import image3 from "../images/DBodycon.webp";
import image4 from "../images/dMidi.webp";

function Article1() {
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
              All about dresses
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

            <div className="row pt-3">{imagesList}</div>
          </div>

          <div className="col-10 col-md-8">
            <p className="p3">
              Midi Dress Sitting between a maxi and a mini dress, the midi is
              what everyone needs for the times when you’re unsure of the
              formality of an event. This style can have any neckline or sleeve
              length, so it’s great for any body shape. Pull-on tights and ankle
              boots for a perfect winter look, or grab a pair of flats and a
              cute straw hat and have a stylish picnic!
            </p>
            <p className="p3">
              Off the Shoulder Take the plunge and keep your shoulders exposed
              in an off-the-shoulder dress. These dresses showcase your
              shoulders, while maintaining a sleeve or ruffle on the bicep. The
              off-shoulder style is great for those who want to exhibit their
              shoulders and arms but don’t want the commitment of a strapless
              look.
            </p>
            <p className="p3">
              <span className="">Bodycon Dress</span> The bodycon is a
              tight-fitting dress that hugs your figure and accentuates your
              assets. They’re often made of stretchy material and are perfect
              for a night out on the town. This dress is ideal for those with an
              hourglass figure, as it flatters the beautiful curves!
            </p>
            <p className="p3">
              Maxi dress is a floor or ankle length informal dress. Maxi dresses
              are formfitting at the top and loose flowing at the bottom, cut to
              flow over the body. They are usually made out of cotton or
              polyester and come in a variety of necklines, colors and patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Article1;
