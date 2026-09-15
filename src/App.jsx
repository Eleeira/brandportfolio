import {
  useState,
} from "react";

import AppShell from "./components/AppShell";
import PrintPortfolio from "./components/PrintPortfolio";


function getInitialLanguage() {
  const params =
    new URLSearchParams(
      window.location.search
    );

  return params.get("lang") === "en"
    ? "en"
    : "it";
}


export default function App() {
  const [
    language,
    setLanguage,
  ] = useState(
    getInitialLanguage
  );


  const params =
    new URLSearchParams(
      window.location.search
    );

  const printMode =
    params.get("print") === "1";


  if (printMode) {
    return (
      <PrintPortfolio
        language={
          language
        }
        onLanguageChange={
          setLanguage
        }
      />
    );
  }


  return (
    <AppShell
      language={
        language
      }
      onLanguageChange={
        setLanguage
      }
    />
  );
}