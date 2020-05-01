import React, { useState, useEffect } from "react";
import { Timestamp, ScriptingHead } from "../styles";
import { Box } from "grommet";
import Player from "react-player";
import Lyrics from "./Lyrics";

import store from "../store";
import { ContentView } from "../styles";
export default () => {
  const [song, setSong] = useState(null);
  const [sub, setSub] = useState(null);
  const [time, setTime] = useState(0);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setSub(
      store.subscribe(s => {
        setSong(s.my.currentSong);
        setTime(s.my.time);
        if (s.my.currentSong) {
          setUrl(s.my.currentSong.url);
        }
      })
    );
    return () => sub && sub.unsubscribe();
  }, []);

  return (
    <ContentView>
      <ScriptingHead>
        <span>Scripting "{song && song.title}"</span>
        <Timestamp>{time.toFixed(2)}</Timestamp>
      </ScriptingHead>
      <p>
        Play the song and click on the current line when it starts to establish
        time stamps
      </p>
      <Box width="100%">
        {url && (
          <Player
            url={url}
            onProgress={store.do.progress}
            width="100%"
            progressInterval={333}
            height={120}
          />
        )}
      </Box>
      <Lyrics song={song} />
    </ContentView>
  );
};
