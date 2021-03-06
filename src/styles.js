import styled from "styled-components";

const MENU_ITEM_ACTIVE_COLOR = "rgba(204,255,51)";
const MENU_ITEM_COLOR = "white";
const MENU_ITEM_HOVER_COLOR = "rgba(204,255,153)";
const BUTTON_COLOR = "rgb(204, 0, 51)";
const BUTTON_COLOR_PRIMARY = "rgb(153, 0,  51)";
const FORM_TITLE = "rgba(0,0,0,0.5)";
const BACKGROUND = "rgba(0,0,255,0.125)";
const FONT = `
font-family: Merriweather, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  `;
const FONT_HEAD = `
font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  `;
export const Frame = styled.main`
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  grid-template-rows: 40px auto;
  grid-template-columns: auto;
  grid-template-areas:
    "head"
    "main";
`;

export const TitleView = styled.header`
  grid-area: "title";
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-area: head;
  margin: 0;
  background-color: ${BACKGROUND};
  background-image: url(grunge-alpha.png);
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
  ${FONT}
  font-size: 1.25rem;
  font-weight: normal;
  text-transform: uppercase;
  padding: 0.5rem;
  margin-right: 1rem;
  color: ${({ active }) => (active ? MENU_ITEM_ACTIVE_COLOR : MENU_ITEM_COLOR)};
  &:hover {
    color: ${MENU_ITEM_HOVER_COLOR};
  }
`;

export const Logo = styled(MenuItem)`
  font-weight: bold;
  color: black;
`;

export const ContentView = styled.article`
  padding: 1rem 2rem;
  ${FONT}
  color: black;
  display: block;
  text-align: left;
  > h1,
  > h2 {
    color: rgba(0, 255, 255, 0.8);
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-weight: bolder;
    margin-bottom: 1rem;
    ${FONT_HEAD}
    font-size: 1.25rem;
  }
  > h1 {
    text-transform: uppercase;
  }
  > h2 {
    border-bottom: 1px solid rgba(0, 0, 255, 0.25);
    padding-bottom: 8px;
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 1rem;
  }
  height: 100%;
  > ul li,
  > ol li {
    color: rgba(255, 255, 255, 0.5);
    span {
      color: black;
      margin-left: 1rem;
    }
    margin-bottom: 0.8rem;
  }
  ol,
  ul {
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 1rem 2rem;
    border-radius: 0.5rem;
  }
`;

export const CreateFormFrame = styled.section`
  display: grid;
  width: 100%;
  overflow: hidden;
  grid-template-rows: auto auto 1fr 100px;
  grid-template-columns: minmax(6rem, 30%) 1fr;
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
  align-items: baseline;
  justify-content: space-between;
  ${FONT}
  font-size: 1.125rem;
  button {
    background: transparent;
    border-radius: 0;
    &.main {
      flex-grow: 1;
      text-align: left;
    }
  }
`;

export const GridArea = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
`;

export const FormTitle = styled(GridArea)`
  padding: 2px;
  ${FONT}
  color: ${FORM_TITLE};
  font-weight: bold;
  text-overflow: ellipsis;
`;
export const FormElement = styled(FormTitle)`
  font-weight: normal;
  color: black;
`;

export const ScriptingHead = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    flex-grow: 1;
  }
`;

export const Timestamp = styled.span`
  font-family: "Courier New", Courier, monospace;
  color: blue;
  font-weight: bold;
`;

export const LyricsView = styled.article``;

export const LyricItem = styled.p`
  ${FONT}
  font-size: 0.8rem;
  padding: 0.2rem;
  color: black;
  font-weight: bold;
  &:hover {
    color: yellow;
  }
  margin: 0;
  i {
    font-weight: normal;
    min-width: 3rem;
    margin-right: 1rem;
    display: inline-block;
    white-space: nowrap;
    color: black;
  }
`;

export const Button = styled.button`
  -moz-appearance: none;
  -webkit-appearance: none;
  color: white;
  border: none;
  ${FONT}
  padding: 0 1.5rem;
  line-height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1.25rem;
  height: 2.5rem;
  background: ${({ primary }) =>
    primary ? BUTTON_COLOR_PRIMARY : BUTTON_COLOR};
  &:hover {
    color: black;
    background: white;
  }
  &:active {
    background: black;
  }
`;

export const SongGrid = styled.section`
  margin: 2rem 0;
  display: grid;
  grid-auto-rows: auto;
`;

export const SongSpacer = styled.hr`
  -moz-appearance: none;
  -webkit-appearance: none;
  margin: 0.25rem;
  border: none;
  height: 1px !important;
  background: rgba(255, 255, 255, 0.5);
`;

export const BlueB = styled.b`
  color: blue;
`;
