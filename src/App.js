import React from "react";
import AppStateProvider from "./Context/AppStateProvider";
import containers from "./Context/state";
import MessageComponent from "./Components/MessageComponent";

function App() {
  return (
    <div className="App">
      <AppStateProvider containers={containers}>
        <MessageComponent />
      </AppStateProvider>
    </div>
  );
}

export default App;
