import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CategoryIndexPage } from "../pages/category";
import { ItemIndexPage } from "../pages/item";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>404 not found</div>,
    },
    {
        path: "/item",
        element: <ItemIndexPage />,
    },
        {
        path: "/category",
        element: <CategoryIndexPage />,
    },
])