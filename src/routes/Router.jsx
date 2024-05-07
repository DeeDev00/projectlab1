import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <h1>Hi</h1> }]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
