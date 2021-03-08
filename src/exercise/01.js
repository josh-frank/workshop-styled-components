import { useState } from "react";
import styled from "styled-components";
// ✅ remember to import the styled-components library!
// 👀 import styled from "styled-components";

// ✅ create two components using styled-components: a div and a button
// ✅ use the inline styles from below to create the CSS string for your components
// 📃 https://styled-components.com/docs/basics#getting-started

export default function App() {
  const [count, setCount] = useState(0);

  const StyledDiv = styled.div`
    width: 300px;
    height: 300px;
    display: grid;
    place-content: center;
    background: skyblue;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15)
  `;

  const StyledButton = styled.button`
    background: dodgerblue;
    padding: 1rem;
    font-size: 1em;
    border: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
    :hover { color: blue; }
  `;

  // ✅ remove the style prop from the div and the button
  // ✅ replace the JSX elements with your styled components
  return (
    <StyledDiv>
      <StyledButton onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </StyledButton>
    </StyledDiv>
  );
}
