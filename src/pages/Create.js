import React, { useState, useEffect } from "react";
import { Form, FormField, TextArea, Box, Button } from "grommet";
import { FormTitle, FormElement, GridArea } from "../styles";
import Player from "react-player";

import store from "../store";
import { ContentView, CreateFormFrame } from "../styles";
export default () => {
  const [sub, setSub] = useState(null);
  const [url, setUrl] = useState(null);
  const [newSong, setNewSong] = useState(store.my.newSong);

  useEffect(() => {
    setSub(
      store.subscribe(s => {
        setNewSong(s.my.newSong);
        if (s.my.newSong) {
          setUrl(s.my.newSong.url || "");
        }
      })
    );
    return () => sub && sub.unsubscribe();
  }, []);

  const saveSong = ({value} )=> {
    console.log("saving", value);
    if (value.title) {
      store.do.saveSong(value.title, value);
    }
  };

  return (
    <ContentView>
      <Form
        value={store.do.makeNewSong()}
        onChange={store.do.setNewSong}
        onSubmit={saveSong}
      >
        <Box direction="column" justify="stretch" fill={true}>
          <h1>Create a song</h1>
          <Box width="100%">
            {url && <Player url={url} width="100%" height={120} />}
          </Box>
          <CreateFormFrame>
            <FormTitle gridArea="name-label">Song Title</FormTitle>
            <FormElement gridArea="name-input">
              <FormField name="title" />
            </FormElement>
            <FormTitle gridArea="url-label">YouTube URL</FormTitle>
            <FormElement gridArea="url-input">
              <FormField name="url" />
            </FormElement>
            <FormTitle gridArea="lyrics-label">Lyrics</FormTitle>
            <FormElement gridArea="lyrics-input">
              <FormField name="lyrics" component={TextArea} />
            </FormElement>
            <GridArea area="buttons">
              <Button primary type="submit" plain={false}>
                Save Song
              </Button>
            </GridArea>
          </CreateFormFrame>
        </Box>
      </Form>
    </ContentView>
  );
};
