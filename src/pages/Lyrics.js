import React, { useState, useEffect } from "react";
import { LyricsView, LyricItem } from "../styles";
import { Button } from "grommet";
import store from "../store";

export default ({ song }) => {
  const [lyrics, setLyrics] = useState(song ? song.lyrics : "");
  const [lyricsArray, setLyricsArray] = useState([]);
  useEffect(() => {
    setLyricsArray(store.do.lyricsArray(lyrics));
  }, [lyrics]);

  useEffect(() => {
    const songLyrics = song ? song.lyrics : "";
    if (lyrics === songLyrics) return;
    setLyrics(songLyrics);
  }, [song]);

  const lyricTime = (index) => {
    if (!song) return '';
    if (!song.marks) return '';
    const n = song.marks[index];
    if (typeof n === 'number') {
      return n.toFixed(2);
    }
    return '';
  }

  return (
    <LyricsView>
      {lyricsArray.map((lyric, index) => (
        <LyricItem onClick={() => store.do.markLyricTime(index)} key={index}>
        <i>{lyricTime(index)}</i>
        {lyric}&nbsp;</LyricItem>
      ))}
    </LyricsView>
  );
};
