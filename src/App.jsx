import { useState } from "react";

import AppShell from "./components/AppShell";

export default function App() {
  const [language, setLanguage] =
    useState("it");

  return (
    <AppShell
      language={language}
      onLanguageChange={setLanguage}
    />
  );
}