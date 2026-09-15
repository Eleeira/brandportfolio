import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "@fontsource-variable/fredoka";
import "@fontsource-variable/nunito-sans";

import "@fontsource/gaegu/400.css";
import "@fontsource/gaegu/700.css";




import App from "./App";
import "./editorial.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);