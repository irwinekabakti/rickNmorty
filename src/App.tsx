import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

const App = () => {
  return (
    <>
      <div>
        {/* <h1>Test</h1> */}
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
