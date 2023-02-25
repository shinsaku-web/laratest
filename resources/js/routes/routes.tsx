import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "../pages";
import { CategoryIndexPage } from "../pages/category";
import { CategoryCreatePage } from "../pages/category/create";
import { ItemIndexPage } from "../pages/item";
import { ItemCreatePage } from "../pages/item/create";
import { ItemEditPage } from "../pages/item/edit";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/item",
        element: <ItemIndexPage />,
    },
    {
        path: "/item/create",
        element: <ItemCreatePage />,
    },
    {
        path: "/item/edit/:id",
        element: <ItemEditPage />,
    },
    {
        path: "/category",
        element: <CategoryIndexPage />,
    },
    {
        path: "/category/create",
        element: <CategoryCreatePage />,
    },
]);
