import { ValueStream } from "@wonderlandlabs/looking-glass-engine";
import localForage from "localforage";

localForage.config({
  name: "lyricist",
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: "lyrics" // Should be alphanumeric, with underscores.
});

const store = new ValueStream("lyricist")
  .property("songs", new Map(), "Map")
  .property("currentSong", "", "string")
  .property("page", "home", "string")
  .method("goCreate", s => s.do.setPage("create"))
  .method("goHome", s => s.do.setPage("home"))
  .property("newSong", null)
  .method("saveSong", (s, name, data) => {
    s.my.songs.set(name, data);
    console.log("saving data:", name, data);
    localForage.setItem(name, data);
    s.do.broadcast("songs");
  })
  .method("makeNewSong", s => {
    if (!s.my.newSong) {
      s.do.setNewSong({ title: "", url: "", lyrics: "" });
    }
    return s.my.newSong;
  })
  .method("addSong", (s, name, lyrics) => {
    if (!s.my.songs.has(name)) {
      s.my.songs.set("name", {
        name,
        lyrics,
        words: []
      });
    }
  });

localForage.iterate((value, key) => {
  store.do.saveSong(key, value);
});

export default store;
