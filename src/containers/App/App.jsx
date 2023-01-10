import React, { useState } from "react";

import AuthPage from "../AuthPage";
import Root from "../Root";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return "Loading...";
  }

  if (!isAuthenticated) {
    return (
      <AuthPage
        setIsAuthenticated={setIsAuthenticated}
        setIsLoading={setIsLoading}
      />
    );
  } else {
    return (
      <div>
        <p>isAuthenticated: {isAuthenticated.toString()}</p>
        <p>isLoading: {isLoading.toString()}</p>
        <Root />
      </div>
    );
  }
}

export default App;
