import { createRoot } from "react-dom/client";
import App from "@/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found!");
}

const contrainer = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [],
    },
]);

contrainer.render(<RouterProvider router={router} />);
