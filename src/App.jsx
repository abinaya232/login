import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import MarksEntryPage from "./components/MarksEntryPage";
import "./styles.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      {isAuthenticated ? <MarksEntryPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
};

export default App;
