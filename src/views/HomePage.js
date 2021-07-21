import "../css/Style.css";
import { NavLink } from "react-router-dom";
import trousersCat from "../images/hs2.webp";
import topsCat from "../images/hs3.webp";
import dressesCat from "../images/hs1.webp";
import sliderImg0 from "../images/slider-0.webp";
import sliderImg1 from "../images/slider-1.webp";
import sliderImg2 from "../images/slider-2.jpg";
import sliderImg3 from "../images/slider-3.jpg";
function HomePage() {
  const categories = [
    {
      title: "SS21 Spring story",
      image: dressesCat,
      text: ` OK boutique has an array of different styles for you to
    feel yourself in, from mini and midi lengths to lace and
    gingham styles.Take a look for casual staple.`,
    },
    {
      title: "SS2 Campaign",
      image: topsCat,
      text: `Discover a range of women's tops at OK boutique. Crop tops
      to off-the-shoulder and going-out tops, shop online for
      every look. We all are in need of stylish tops.`,
    },
    {
      title: " SS21 LookBook",
      image: trousersCat,
      text: `Women's Trousers & Leggings. From culottes and crops to
      wide-leg and skinny styles, our latest edit of women's
      trousers and leggings is full of go-to pieces.`,
    },
  ];

  const categoryElements = categories.map((category, index) => {
    return (
      <div key={index} className="col-12 col-xl-4 mb-3">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="img-fluid cardImage"
                src={category.image}
                alt="Dresses"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <NavLink className=" card-title" to="/articles">
                  {category.title}
                </NavLink>
                <p className="card-text">{category.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container py-3">
        <div className="container d-flex justify-content-center">
          <div className="row pt-3 carousel-container ">
            <div className="col">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>

                <div className="carousel-inner img-responsive mx-auto">
                  <div className="carousel-item active">
                    <img
                      className="img-carousel d-block w-100"
                      src={sliderImg0}
                      alt="clothes"
                    />
                  </div>
                  <div className="carousel-item ">
                    <img
                      className="img-carousel d-block w-100"
                      src={sliderImg1}
                      alt="clothes"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="img-carousel d-block w-100"
                      src={sliderImg2}
                      alt="clothes"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="img-carousel d-block w-100"
                      src={sliderImg3}
                      alt="clothes"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2 mx-5">
          <div className="pb-2"> Popular categories: </div>
        </div>

        <div className="row articles articlesContainer">{categoryElements}</div>
      </div>
    </div>
  );
}
export default HomePage;
