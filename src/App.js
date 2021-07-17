import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage";
import Articles from "./views/Articles";
import Article1 from "./views/Article1";
import Article2 from "./views/Article2";
import Chat from "./views/Chat";
import Register from "./views/Register";
import AboutUs from "./views/AboutUs";

import Page404 from "./views/Page404";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/articles">
            <Articles />
          </Route>

          <Route path="/article1">
            <Article1 />
          </Route>

          <Route path="/article2">
            <Article2 />
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
