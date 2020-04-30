import styled from "styled-components";

const MENU_ITEM_ACTIVE_COLOR = "rgb(255,0,0)";
const MENU_ITEM_COLOR = "rgb(153, 51, 204)";
const MENU_ITEM_HOVER_COLOR = "rgb(153, 102, 102)";

export const Frame = styled.main`
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  grid-template-rows: 60px auto;
  grid-template-columns: auto;
  grid-template-areas:
    "head"
    "main";
  border: 1px solid red;
`;

export const TitleView = styled.header`
  grid-area: "title";
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  grid-area: head;
  margin: 0;
`;

export const BodyView = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
  grid-area: main;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  form {
    height: 100%;
  }
`;

export const MenuItem = styled.div`
  flex-grow: 0;
  font-size: 1rem;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  padding: 0.5rem;
  margin-right: 1rem;
  color: ${({ active }) => (active ? MENU_ITEM_ACTIVE_COLOR : MENU_ITEM_COLOR)};
  &:hover {
    color: ${MENU_ITEM_HOVER_COLOR};
  }
`;

export const Logo = styled(MenuItem)`
  font-weight: bold;
`;

export const ContentView = styled.article`
  padding: 1rem;
  font-size: 1rem;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: black;
  display: block;
  text-align: left;
  > h1 {
    font-weight: bolder;
    margin-bottom: 1rem;
  }
  > p {
    margin-bottom: 1rem;
  }
  height: 100%;
`;

export const CreateFormFrame = styled.section`
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-rows: auto auto 1fr 60px;
  grid-template-columns: minmax(3rem, 30%) 1fr;
  flex-grow: 1;
  grid-template-areas:
    "name-label name-input"
    "url-label url-input"
    "lyrics-label lyrics-input"
    "save-button save-button";
`;

export const SongListing = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
  width: 100%;
  > h2 {
    flex: 1;
    font-weight: bold;
  }
  > button {
    flex: 0;
  }
`;

export const GridArea = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
`;

export const FormTitle = styled(GridArea)`
  padding: 2px;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: black;
  font-weight: bold;
  text-overflow: ellipsis;
`;

export const FormElement = styled(FormTitle)`
  font-weight: normal;
`;
