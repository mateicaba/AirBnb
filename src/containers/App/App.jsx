import React, { useState } from "react";
import Login from "../Login";
import Root from "../Root";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return "Loading...";
  }

  if (!isAuthenticated) {
    return (
      <Login
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
