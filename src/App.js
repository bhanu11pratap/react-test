import React from "react";

import Details from "./components/Details";
import NoInternetConnection from "./components/NoInternet";

export default function App() {
  return (
    <NoInternetConnection>
      <h1>This is a React assignment task</h1>
      <Details />
    </NoInternetConnection>
  );
}
