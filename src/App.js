import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import Articles from "./views/Articles";
import Article_dresses from "./views/Article_dresses";
import Article_tops from "./views/Article_tops";
import Article_trousers from "./views/Article_trousers";
import Chat from "./views/Chat";
import Register from "./views/Register";
import AboutUs from "./views/AboutUs";

import Page404 from "./views/Page404";
import Todo from "./views/Todo";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/articles">
            <Articles />
          </Route>

          <Route path="/articles/dresses">
            <Article_dresses />
          </Route>

          <Route path="/articles/tops">
            <Article_tops />
          </Route>

          <Route path="/articles/trousers">
            <Article_trousers />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/aboutus">
            <AboutUs />
          </Route>

          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
