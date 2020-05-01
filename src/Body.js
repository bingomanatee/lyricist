import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Script from "./pages/ScriptSong";
import Play from "./pages/Play";
import Notes from "./pages/Styled-Components";
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

    case "script":
      PageView = Script;
      break;

    case "play":
      PageView = Play;
      break;

    case "notes":
      PageView = Notes;
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
