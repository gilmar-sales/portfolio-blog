import { NavigationContainer, Content, NavItem } from "./styles";
import Link from "next/link";

import React from "react";

interface NavigationProps {
  active?: string;
}

const Navigation: React.FC<NavigationProps> = ({ active, children }) => {
  return (
    <>
      <NavigationContainer>
        <Content>
          <Link href="/">
            <NavItem style={{ color: active == "home" ? "red" : "white" }}>
              início
            </NavItem>
          </Link>
          <Link href="/tools">
            <NavItem>ferramentas</NavItem>
          </Link>

          <Link href="/projects">
            <NavItem style={{ color: active == "projects" ? "red" : "white" }}>
              projetos
            </NavItem>
          </Link>
          <Link href="/blog">
            <NavItem style={{ color: active == "blog" ? "red" : "white" }}>
              blog
            </NavItem>
          </Link>
        </Content>
      </NavigationContainer>
      <main>{children}</main>
    </>
  );
};

export default Navigation;
