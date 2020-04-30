import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Create from "./pages/Create";

import store from "./store";
import { BodyView } from "./styles";
export default () => {
  const [sub, setSub] = useState(null);
  const [page, setPage] = useState(store.my.page);

  useEffect(() => {
    setSub(store.subscribe(s => setPage(s.my.page)));
    return () => sub && sub.unsubscribe();
  }, []);

  let PageView = Home;
  switch (page) {
    case "home":
      PageView = Home;
      break;

    case "create":
      PageView = Create;
      break;

    default:
      PageView = Home;
  }

  return (
    <BodyView id="body-view">
      <PageView />
    </BodyView>
  );
};
