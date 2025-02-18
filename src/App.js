import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from "./Components/Header";
import Body from "./Components/Body";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";

const AppLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide Header & Body only on mobile when on /watch
  const hideHeaderBody = isMobile && location.pathname === "/watch";

  return (
    <div>
      {!hideHeaderBody && <Header />}
      {!hideHeaderBody && <Body />}
      {children}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <MainContainer />
      </AppLayout>
    ),
  },
  {
    path: "watch",
    element: (
      <AppLayout>
        <WatchPage />
      </AppLayout>
    ),
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
