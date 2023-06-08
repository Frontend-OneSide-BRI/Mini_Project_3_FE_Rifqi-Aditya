import { Provider } from "react-redux";
import { store } from "@redux/store.js";
import { Routes, Route } from "react-router-dom";
import Landing from "@pages/Landing";
import Movie from "@pages/Movie";
import Login from "@pages/Login";
import Movies from "@pages/Movies";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movieId" element={<Movie />} />
      </Routes>
    </Provider>
  );
}

export default App;
