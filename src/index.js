import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./languages/en/global.json";
import global_es from "./languages/es/global.json";
import { NeonOnContextProvider } from "./Context/neonOnContext";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <I18nextProvider i18n={i18next}>
    <NeonOnContextProvider>
      <App />
    </NeonOnContextProvider>
  </I18nextProvider>

  // document.getElementById('root')
);
