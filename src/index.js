import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components/macro";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { Card, Search } from "./components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        className="main"
        style={{
          background: useDarkTheme
            ? darkTheme.primaryBackgroundColor
            : defaultTheme.primaryBackgroundColor,
          color: useDarkTheme
            ? darkTheme.primaryColor
            : defaultTheme.primaryColor,
        }}
      >
        <div className="container">
          <button
            style={{
              margin: "0 16px 24px 0",
              padding: "8px",
              background: "none",
            }}
            onClick={() => setUseDarkTheme(false)}
          >
            Default Theme
          </button>
          <button
            style={{
              margin: "0 16px 24px 0",
              padding: "8px",
              background: "none",
            }}
            onClick={() => setUseDarkTheme(true)}
          >
            Dark Theme
          </button>
          <div>
            <Card>
              <Search />
            </Card>
          </div>
          <GlobalStyle />
        </div>
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
