import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import global_en from "../src/translations/en/global.json";
import global_sp from "../src/translations/sp/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    sp: {
      global: global_sp,
    },
  },
});

// Keep <html lang> in sync with the active language (a11y + SEO)
const syncHtmlLang = (lng) => {
  const langAttr = lng === "sp" ? "es" : "en";
  document.documentElement.setAttribute("lang", langAttr);
};
syncHtmlLang(i18next.language);
i18next.on("languageChanged", syncHtmlLang);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
