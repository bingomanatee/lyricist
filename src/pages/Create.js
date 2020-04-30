import React, { useState, useEffect } from "react";
import { Form, FormField, TextArea } from "grommet";
import { FormTitle, FormElement } from "../styles";

import store from "../store";
import { ContentView, CreateFormFrame } from "../styles";
export default () => {
  const [sub, setSub] = useState(null);
  const [page, setPage] = useState(store.my.page);

  useEffect(() => {
    setSub(store.subscribe(s => setPage(s.my.page)));
    return () => sub && sub.unsubscribe();
  }, []);

  return (
    <ContentView>
      <h1>Create a song</h1>
      <Form>
        <CreateFormFrame>
          <FormTitle gridArea="name-label">Song Title</FormTitle>
          <FormElement gridArea="name-input">
            <FormField name="title" />
          </FormElement>
        </CreateFormFrame>
      </Form>
    </ContentView>
  );
};
