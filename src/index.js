import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
