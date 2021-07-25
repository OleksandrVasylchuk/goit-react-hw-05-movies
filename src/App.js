import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";

// const AppBar = lazy(() =>
//   import("./components/AppBar/" /* webpackChunkName: "app-bar" */)
// );

const HomeView = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-view" */)
);

const MoviesView = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "mvies-view" */)
);

const HomeSubView = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName: "home-sub-view" */)
);

const NotFoundView = lazy(() =>
  import("./views/NotFound" /* webpackChunkName: "not-found-view" */)
);

function App() {
  return (
    <Container>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        }
      >
        <AppBar />

        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:moviesId">
            <HomeSubView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
