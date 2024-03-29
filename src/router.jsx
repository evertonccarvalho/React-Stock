import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/Layout";
import ShowItem from "./pages/items/ShowItem";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DashBoard /> },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          {
            index: true,
            element: <ListItems />,
          },
          {
            path: "new",
            index: true,
            element: <CreateItem />,
          },
          { path: ":id", index: true, element: <ShowItem /> },
          { path: ":id/update", index: true, element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
