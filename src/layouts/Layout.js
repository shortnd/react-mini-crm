import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SkipButton = styled.button`
  position: absolute;
  top: -100%;
  left:0;
  padding: 15px;
  background: #fff;
  border: 3px solid #000;
  color: #000;
  font-weight: 600;
  &:focus {
    top: 0;
  }
`;

export default function Layout({ children }) {
  const main = useRef(null);
  const skipToContent = (event) => {
    event.preventDefault();
    main.current.setAttribute('tabindex', '-1');
    main.current.focus();
    main.current.removeAttribute('tabindex');
  }

  return (
    <>
      <header>
        <SkipButton type="button" onClick={event => skipToContent(event)}>Skip to Content</SkipButton>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link> | {" "}
        <Link to="/companies">Companies</Link>
      </header>
      <main ref={main}>
        {children}
      </main>
    </>
  )
}
