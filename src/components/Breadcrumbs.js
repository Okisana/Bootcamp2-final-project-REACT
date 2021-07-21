import { NavLink } from "react-router-dom";

function Breadcrumbs({ paths }) {
  const links = paths.map((path, index) => {
    if (path.link) {
      return (
        <li key={index} className="breadcrumb-item">
          <NavLink className="pageLink" to={path.link}>
            {path.label}
          </NavLink>
        </li>
      );
    }
    return (
      <li key={index} className="breadcrumb-item active" aria-current="page">
        {path.label}
      </li>
    );
  });
  return (
    <div>
      <nav className="mt-2">
        <ol className="breadcrumb">{links}</ol>
      </nav>
    </div>
  );
}
export default Breadcrumbs;
