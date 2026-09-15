import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import "@fontsource-variable/fredoka";
import "@fontsource-variable/nunito-sans";

import "@fontsource/gaegu/400.css";
import "@fontsource/gaegu/700.css";

import '@fontsource/gowun-batang/400.css'
import '@fontsource/gowun-batang/700.css'

import '@fontsource/kalam/400.css'
import '@fontsource/kalam/700.css'

import '@fontsource/alegreya-sans/400.css'
import '@fontsource/alegreya-sans/500.css'
import '@fontsource/alegreya-sans/700.css'

import '@fontsource/la-belle-aurore/400.css'


import '@fontsource/fraunces/400.css'
import '@fontsource/fraunces/500.css'
import '@fontsource/fraunces/600.css'

import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'



import App from "./App";
import "./editorial.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);