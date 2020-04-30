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
  .method("playSong", (s, song) => {
    s.do.setCurrentSong(song);
    s.do.setPage("play");
  })
  .method('lyricsArray', (s, lyrics) => {
    return lyrics.split("\n")
    .filter(s => s && s.trim())
  })
  .method("currentLine", s => {
    if (!s.my.currentSong) {
      return "";
    }
    const { lyrics, marks } = s.my.currentSong;
    const time = s.my.time;
    if (!Array.isArray(marks)) return "";
    const la = s.do.lyricsArray(lyrics);
    let lastTime = 0;
    let currentTime;
    for (let i = 0; i < marks.length; ++i) {
      if (!la[i]) continue;
      if (i) {
        lastTime = currentTime;
      }
      currentTime = marks[i];
      if (typeof lastTime === "number" && typeof currentTime === "number") {
        console.log("lastTime:", lastTime, "currentTime: ", currentTime);
        if (time >= lastTime && time < currentTime) {
          return la[i - 1];
        }
      }
    }
    return "";
  })
  .method("saveSong", (s, name, data) => {
    s.my.songs.set(name, data);
    localForage.setItem(name, data);
    s.do.setSongs(new Map(s.my.songs));
    s.do.broadcast("songs");
  })
  .method("markLyricTime", (s, index) => {
    if (!s.my.currentSong) {
      return;
    }
    if (!s.my.currentSong.marks) {
      s.my.currentSong.marks = [];
    }
    s.my.currentSong.marks[index] = s.my.time;
    s.do.saveSong(s.my.currentSong.title, s.my.currentSong);
  })
  .property("currentSong", null)
  .property("time", 0, "number")
  .method("progress", (s, progress) => {
    if (!progress) return;
    if (typeof progress.playedSeconds === "number") {
      s.do.setTime(progress.playedSeconds);
    }
  })
  .method(
    "scriptSong",
    (s, song) => {
      s.do.setPage("script");
      s.do.setCurrentSong(song);
    },
    true
  )
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
      s.do.setSongs(new Map(s.my.songs));
    }
  });

localForage.iterate((value, key) => {
  store.do.saveSong(key, value);
});

export default store;
