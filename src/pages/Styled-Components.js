import React, { useState, useEffect } from "react";
import {} from "grommet";
import store from "../store";
import { ContentView, BlueB } from "../styles";
export default () => {
  return (
    <ContentView>
      <h1>Styled Components</h1>
      <h2>Nature</h2>
      <p>Creates React tags with CSS classes that define style</p>
      <p>Code goes in to </p>
      <pre>
        <code>{`<style data-styled="active" data-styled-version="5.1.0">`}</code>
      </pre>
      <p>...tag and updates parameterically</p>
      <h2>Advantages</h2>
      <ol>
        <li>
          <span>Doesn't require external styling component/webpack/files</span>
        </li>
        <li>
          <span>
            Can drive style change through listening to tag parameters
          </span>
        </li>
        <li>
          <span>Can develop React component and style in same page</span>
        </li>
        <li>
          <span>
            Extremely flexible for changing styles based on circumstance
          </span>
        </li>
        <li>
          <span>Great way to do BEM</span>
        </li>
      </ol>
      <h2>Targeting elements</h2>
      <p>
        Style changes can be deeper than target tag: you can target sub-tags
      </p>
      <p>
        Given the nesting nature of HTML best to do so with "direct child"
        (&gt;) directives or concrete class names (<code>.my-heading</code>)
      </p>
      <p>
        Good chance to use (
        <a target="bem" href="http://getbem.com/introduction/">
          BEM Patterning
        </a>
        )
      </p>
      <h2>Overriding/blending</h2>
      <p>
        You can override <BlueB>styled component styles</BlueB> through use of
        the styled parameter
      </p>
      <pre>
        <code>
          {`<BlueB style={{ color: "green" }}>I am green bold</BlueB>`}
        </code>
      </pre>
      <BlueB style={{ color: "green" }}>I am green bold</BlueB>
      <p>
        or css classes: note that the class "orange" will suffix after all the
        styled components themingt
      </p>
      <pre>
        <code>
          {`<BlueB className="orange">I am orange bold</BlueB>.<h2>Decoration</h2>`}
        </code>
      </pre>
      <BlueB className="orange">I am orange bold</BlueB>.<h2>Decoration</h2>
      <p>
        Styled components act as HOC/Decorators allowing you to extend other
        styled components or existing React modules.
      </p>
      <pre>
        <code>
          {`
const Headline = styled.h1 \`...\`;
const HeadlineFlyout = styled(Headline)\`...\`;
const DecoratedPlayer = styled(ThirdPartyComponent)\`...\`
    `}
        </code>
      </pre>
      <h2>Variable Input from properties</h2>
      <p>
        Probably the greatest magic from SC is the ability to pass parameters
        from the tags into the body of the markup. They are expressable as a
        function embedded in the template that extracts properties as with
        functional components{" "}
      </p>
      <pre>
        <code>
          {`
export const GridArea = styled.div\`
  grid-area: $\{(\{ gridArea \}) => gridArea\};
\`;
`}
        </code>
      </pre>
      <p>
        If you want an extended example of the power of this check out Grommet's
        parameterized{" "}
        <a href="https://v2.grommet.io/box" target="box">
          Box component
        </a>
        .
      </p>
      <h2>Themes</h2>
      <p>
        Fair warning - have not implemented this BUT:
        <a href="https://styled-components.com/docs/advanced" target="theme">
          Theme variables
        </a>{" "}
        can be put into scope at a higher level through the theme provider (a
        context) that will be available downstream to enable shared properties
        for use in your styling functions.
      </p>
    </ContentView>
  );
};
