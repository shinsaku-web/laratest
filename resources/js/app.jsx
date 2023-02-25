import "./bootstrap";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

function App() {
    return (
        <React.StrictMode>
            <ChakraProvider>
                <RouterProvider router={router} />
            </ChakraProvider>
        </React.StrictMode>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
