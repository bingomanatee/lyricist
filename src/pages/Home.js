import React, { useState, useEffect } from "react";
import { SongListing } from "../styles";
import { Button } from "grommet";
import store from "../store";
import { ContentView } from "../styles";
export default () => {
  const [sub, setSub] = useState(null);
  const [songs, setSongs] = useState(new Map());

  useEffect(() => {
    setSub(
      store.subscribe(s => {
        setSongs(s.my.songs);

      })
    );
    return () => sub && sub.unsubscribe();
  }, []);

  const songsToItems = song =>
    song && (
      <SongListing key={song.title}>
        <h2>
          <Button plain onClick={() => store.do.playSong(song)}>
            {song.title}
          </Button>
        </h2>
        <Button plain onClick={() => store.do.scriptSong(song)}>
          Script
        </Button>
      </SongListing>
    );

  return (
    <ContentView>
      <h1>Welcome to Lyricist</h1>
      <p>Click on "Create" above to create a music video</p>
      <h2>Saved Songs</h2>
      {Array.from(songs.values()).map(songsToItems)}
    </ContentView>
  );
};
