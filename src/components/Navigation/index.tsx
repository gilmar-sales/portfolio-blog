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
            <NavItem style={{ color: active == "home" && "#87BBFB" }}>
              início
            </NavItem>
          </Link>
          <Link href="/tools">
            <NavItem style={{ color: active == "tools" && "#87BBFB" }}>
              ferramentas
            </NavItem>
          </Link>

          <Link href="/projects">
            <NavItem style={{ color: active == "projects" && "#87BBFB" }}>
              projetos
            </NavItem>
          </Link>
          <Link href="/blog">
            <NavItem style={{ color: active == "blog" && "#87BBFB" }}>
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
