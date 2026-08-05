import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../features/home/pages/Home";
import Product from "../features/product/pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
