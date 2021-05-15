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
            <NavItem style={{ color: active == "home" && "#0c729e" }}>
              início
            </NavItem>
          </Link>
          <Link href="/tools">
            <NavItem>ferramentas</NavItem>
          </Link>

          <Link href="/projects">
            <NavItem style={{ color: active == "projects" && "#0c729e" }}>
              projetos
            </NavItem>
          </Link>
          <Link href="/blog">
            <NavItem style={{ color: active == "blog" && "#0c729e" }}>
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
