import React, { useState, useEffect } from "react";

import NoInternetCard from "./NoInternetCard";

const NoInternetConnection = (props) => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  if (isOnline) {
    return props.children;
  } else {
    return (
      <>
        <h1>No connection pls check you Network</h1>
        <NoInternetCard />
      </>
    );
  }
};

export default NoInternetConnection;
