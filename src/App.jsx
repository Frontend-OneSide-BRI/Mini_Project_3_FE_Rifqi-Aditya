import { RouterProvider } from "react-router-dom";
import { router } from "@routes/routes";
import { Provider } from "react-redux";
import { store } from "@redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
