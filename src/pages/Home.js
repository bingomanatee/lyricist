import React, { useState, useEffect } from "react";
import { SongListing, SongGrid, SongSpacer, Button, Buttons } from "../styles";
import {Box} from "grommet";
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
      <>
        <SongListing key={song.title}>
          <Button
            className="main"
            plain
            onClick={() => store.do.playSong(song)}
          >
            {song.title}
          </Button>

          <Button onClick={() => store.do.scriptSong(song)}>Script</Button>
        </SongListing>
        <SongSpacer />
      </>
    );

  return (
    <ContentView>
      <h1>Welcome to Lyricist</h1>
      <p>Click on "Create" above to create a music video</p>
      <h2>Saved Songs</h2>
      <SongGrid>
        <SongSpacer />
        {Array.from(songs.values()).map(songsToItems)}
      </SongGrid>
      <Box justify="between" direction="row">
      <Button onClick={store.do.loadWho}>Load "Who can it be now"</Button>
      <Button onClick={store.do.loadHand}>Load "Hand in my pocket"</Button>
      </Box>
    </ContentView>
  );
};
