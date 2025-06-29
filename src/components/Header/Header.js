import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <div>
    <Container>
      <Div1>
        <a href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </a>
      </Div1>
      <Div2>
        <li>
          <a href="/#projects">
            <NavLink>Projects</NavLink>
          </a>
        </li>
        <li>
          <a href="/#tech">
            <NavLink>Technologies</NavLink>
          </a>
        </li>
        <li>
          <a href="/#about">
            <NavLink>About</NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        {/* <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem"/>
        </SocialIcons> */}
        <SocialIcons href="https://www.linkedin.com/in/junaid-soomro-063a6a179/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
