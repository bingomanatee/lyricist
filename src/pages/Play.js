import React, { useState, useEffect } from "react";
import { Timestamp, ScriptingHead } from "../styles";
import { Button, Box } from "grommet";
import Player from "react-player";
import Lyrics from "./Lyrics";

import store from "../store";
import { ContentView } from "../styles";
export default () => {
  const [song, setSong] = useState(null);
  const [sub, setSub] = useState(null);
  const [time, setTime] = useState(0);
  const [line, setLine] = useState('');
  const [url, setUrl] = useState("");
  useEffect(() => {
    setSub(
      store.subscribe(s => {
        setSong(s.my.currentSong);
        setTime(s.my.time);
        if (s.my.currentSong) {
          setUrl(s.my.currentSong.url);
        }
        const currentLine = s.do.currentLine();
        if (currentLine !== line) setLine(currentLine);
      })
    );
    return () => sub && sub.unsubscribe();
  }, []);

  return (
    <ContentView>
      <ScriptingHead>
        <span>Playing "{song && song.title}"</span>
        <Timestamp>{time.toFixed(2)}</Timestamp>
      </ScriptingHead>
      <p>playing the video will display the current lyric</p>
      <Box width="100%">
        {url && (
          <Player
            url={url}
            onProgress={store.do.progress}
            width="100%"
            height={300}
          />
        )}
      </Box>
      <p>{line}</p>
    </ContentView>
  );
};
