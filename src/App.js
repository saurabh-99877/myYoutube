import Header from "./Components/Header";
import Body from "./Components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* Render Header and Body at the parent level */}
        <Header />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
