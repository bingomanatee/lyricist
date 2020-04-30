import { ValueStream } from "@wonderlandlabs/looking-glass-engine";

const store = new ValueStream("lyricist")
  .property("songs", new Map(), "Map")
  .property("currentSong", "", "string")
  .property("page", "home", "string")
  .method("goCreate", s => s.do.setPage("create"))
  .method("addSong", (s, name, lyrics) => {
    if (!s.my.songs.has(name)) {
      s.my.songs.set("name", {
        name,
        lyrics,
        words: []
      });
    }
  });

export default store;
