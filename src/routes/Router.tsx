import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Homepage from "../pages/Homepage/Homepage";
import Detailpage from "../pages/Detailpage/Detailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement,
    children: [
      {
        // index: true,
        path: "/:page?",
        element: <Homepage />,
      },
      {
        path: "/detail/:id",
        element: <Detailpage />,
      },
    ],
  },
]);

export default router;
