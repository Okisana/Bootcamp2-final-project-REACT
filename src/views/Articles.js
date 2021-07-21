import { NavLink } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import dressCatImg from "../images/drc2.jpg";
import topCatImg from "../images/tc2.jpg";
import trousersCatImg from "../images/trc2.jpg";

function Articles() {
  const breadcrumbPaths = [
    {
      link: "/",
      label: "Home",
    },
    { label: "Articles" },
  ];

  const articles = [
    {
      image: dressCatImg,
      title: "Dresses",
      text: ` From black dresses you’ll wear time and time again to smock
      styles perfect for the months ahead, our collection of dresses
      for women has something for everyone. Second Skin has an array
      of different styles for you to feel yourself in, from mini and
      midi lengths to lace and gingham styles, while Secon Skin has
      all your wedding needs covered. Whether you’re getting married
      or attending a wedding, shop from embroidered and satin styles
      to blush and white dresses. Take a look at & Other Stories for
      casual staples or check out Topshop for ribbed bodycons and
      ditsy floral prints.`,
      link: "/articles/dresses",
    },
    {
      image: topCatImg,
      title: "Tops",
      text: `You’ve found your perfect pair of bottoms, now all you need is
      a top to complete the look. Introducing our edit of tops for
      women, which features everything from vests and casual
      T-shirts to smart shirts and trend-led, cold-shoulder tops.
      New Look has all your style essentials, whatever your occasion
      or taste; you can find fresh V-neck tops to enhance your
      daytime look as well as oversized tops in boyfriend styles for
      that cosy feel. And we are here to help you add drama, with
      bold prints and backless tops, while Second Skin has hundreds
      of styles to help you express your individuality. Invent your
      own style with our collection of tops for women.`,
      link: "/articles/tops",
    },
    {
      image: trousersCatImg,
      title: "Trousers",
      text: `From culottes and crops to wide-leg and skinny styles, our
      latest edit of women’s trousers and leggings is full of go-to
      pieces for any occasion. Embracing your own unique style
      couldn’t be easier with the wide range of cuts and styles from
      Second Skin Stand out in flares from New Look or keep things
      ultra-casual in a pair of women's cargo trousers. Check out
      for women’s joggers and comfy sports leggings to add to your
      new workwear line-up, because that’s what working from home is
      all about, right? When jeans are off the cards, check out our
      edit of women’s trousers.`,
      link: "/articles/trousers",
    },
  ];

  const articleElements = articles.map((article, index) => {
    return (
      <div key={index} className="row">
        <div className="card mb-3 articleEl">
          <div className="row g-0">
            <div className="col-12 col-md-3 px-5 py-2">
              <img
                className="img-fluid cardImage"
                src={article.image}
                alt="dresses"
              />
            </div>
            <div className="col-12 col-md-9">
              <div className="card-body">
                <NavLink className="article-title" to={article.link}>
                  {article.title}
                </NavLink>
                <p className="card-text articleText">{article.text}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="container">
      <Breadcrumbs paths={breadcrumbPaths} />
      {articleElements}

      <div className="row">
        <div className="col-12 col-md-12">
          <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Articles;
