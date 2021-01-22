import React, { useState } from "react";
import { Navigation, Footer, Header, WhatWeDo, Contact } from "./components";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <div className="App">
      <Navigation
        language={language}
        handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Header language={language} />
      <div class="container">
        <div class="row">
          <div class="col-md-8 mb-5">
            <WhatWeDo language={language} />
          </div>
          <div class="col-md-4 mb-5">
            <Contact language={language} />
          </div>
        </div>
      </div>
      <Footer language={language} />

    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
