import { NavLink } from "react-router-dom";

function Page404() {
  return (
    <div className="row mt-2">
      <div className="col-6 offset-3 text-center mt-5">
        <h3 className="text-muted"> Something went wrong</h3>
        <p>Sorry, an error occured. Requested page not found!</p>
        <NavLink exact to="/">
          <button className="btn btn-danger">Go to home page</button>
        </NavLink>
      </div>
      <div className="empty"></div>
    </div>
  );
}
export default Page404;
