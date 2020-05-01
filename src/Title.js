import React, { useState, useEffect } from "react";

import store from "./store";
import { TitleView, MenuItem, Logo } from "./styles";
export default () => {
  const [sub, setSub] = useState(null);
  const [page, setPage] = useState(store.my.page);

  useEffect(() => {
    setSub(store.subscribe(s => setPage(s.my.page)));
    return () => sub && sub.unsubscribe();
  }, []);

  return (
    <TitleView>
      <Logo onClick={store.do.goHome}>Lyricist</Logo>
      <MenuItem active={page === "create"} onClick={store.do.goCreate}>
        Create Song
      </MenuItem>
      <MenuItem active={page === "style"} onClick={store.do.goNotes}>
        Style Notes
      </MenuItem>
    </TitleView>
  );
};
