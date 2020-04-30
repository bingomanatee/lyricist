import styled from "styled-components";

const MENU_ITEM_ACTIVE_COLOR = "rgb(255,0,0)";
const MENU_ITEM_COLOR = "rgb(153, 51, 204)";
const MENU_ITEM_HOVER_COLOR = "rgb(153, 102, 102)";

export const Frame = styled.main`
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  grid-template-rows: 30px 1fr;
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
`;

export const CreateFormFrame = styled.section`
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: minmax(3rem, 30%) 1fr;
  grid-template-areas:
    "name-label name-input"
    "lyrics-label lyrics-input";
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
