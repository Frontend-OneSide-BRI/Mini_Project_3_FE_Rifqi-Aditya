import { Provider } from "react-redux";
import { store } from "@redux/store.js";
import { Routes, Route } from "react-router-dom";
import Landing from "@pages/Landing";
import Movies from "@pages/Movie";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movie/:movieId" element={<Movies />} />
      </Routes>
    </Provider>
  );
}

export default App;
